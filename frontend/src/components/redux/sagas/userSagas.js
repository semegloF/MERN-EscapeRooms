import { all, takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
	signInSuccess,
	signInFailure,
	signOutSuccess,
	signOutFailure,
	signUpSuccess,
	signUpFailure

} from '../actions/userActions';

function signInApi(username, password) {
	return axios({
		method: "POST",
		data: {
			username,
			password
		},
		withCredentials: true,
		url: "http://10.30.40.121:3528/loginadmin",
		})
		.then(res => {
			return res.data
		})
		.catch(err => {
			throw new Error("Le mot de passe ou le nom d'utilisateur est incorrect.");
		});
}

function signUpApi(username, password) {
	return axios({
		method: "POST",
		data: {
			username,
			password
		},
		withCredentials: true,
		url: "http://10.30.40.121:3528/registeradmin",
	})
		.then(res => {
			return res.data.user
		})
		.catch(err => {
			const { message } = err.response.data;
			throw new Error(message);
		});
}

function getCurrentUser() {
	return axios({
		method: "GET",
		withCredentials: true,
		url: "http://10.30.40.121:3528/selectadmin"
		})
		.then(res => {
			return res.data
		})
		.catch(err => {
			throw new Error("Not logged in");
		});
}


function signOutApi() {
	return 	axios({
				method: "GET",
				withCredentials: true,
				url: "http://10.30.40.121:3528/logoutadmin"
			})
			.then(res => {
				console.log(res);
				return res.data
			})
			.catch(err => {
				throw new Error("Impossible de se déconnecter.");
			});
}

export function* signIn({payload: {username, password}}) {
	try {
		const user = yield call(signInApi, username, password);
		yield put(signInSuccess(user));
	} catch(err) {
		yield put(signInFailure(err.message));
	}
}

export function* signUp({payload: {username, password}}) {
	try {
		const user = yield call(signUpApi, username, password);
		yield put(signUpSuccess(user));
	} catch(err) {
		yield put(signUpFailure(err.message));
	}
}

export function* isUserLoggedIn() {
	const user = yield call(getCurrentUser);
	if (user) {
		yield put(signInSuccess(user));
	} else {
		return;
	}
}


export function* signOut() {
	try {
		const successMsg = yield call(signOutApi);
		console.log(successMsg);
		yield put(signOutSuccess(successMsg));
	} catch(err) {
		yield put(signOutFailure(err.message));
	}
}

export function* onSignInStart() {
	yield takeLatest('SIGN_IN_START', signIn)
}

export function* onSignUpStart() {
	yield takeLatest('SIGN_UP_START', signUp)
}

export function* onCheckUserSession() {
	yield takeLatest('CHECK_USER_SESSION', isUserLoggedIn)
}

export function* onSignOutStart() {
	yield takeLatest('SIGN_OUT_START', signOut)
}
export function* userSagas() {
	yield all([
		call(onSignInStart),
		call(onSignUpStart),
		call(onCheckUserSession),
		call(onSignOutStart)
	])
}