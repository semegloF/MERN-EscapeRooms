import {useEffect, useState} from 'react';
import Button from '../Button/ButtonWithSpinner';
import ErrMsg from '../Msgs/ErrMsg';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {  signOutStart } from '../redux/actions/userActions';

import { selectCurrentUser,  selectErrMsg } from '../redux/selectors/userSelector';

function Gestion(props) {
	const dispatch = useDispatch();

	const currentUser = useSelector(state => selectCurrentUser(state));
	const { username } = currentUser;

	let errMsgRes = useSelector(state => selectErrMsg(state))

	const [errMsg, setErrMsg] = useState('');

	useEffect(() => {
		setErrMsg(errMsgRes)
	}, [errMsgRes])

	useEffect(() => {
		document.title = `Bienvenue ${username}`;
	})

	const handleLogout = () => {
		dispatch(signOutStart());
	}

	return (
		
		<div className="dashboard">	
				{	errMsg ? <ErrMsg text={errMsg} /> : ''  }

				{/* <h1 >Hello {username}</h1> */}
		
				<Link to={"/ajoutlocal"}>Ajout d'une nouvelle adresse</Link>

<hr/>
<Button handleClick={handleLogout} label='Déconnexion'/>

	
		</div>
	);
}

export default Gestion;