import React, {useState, useEffect} from 'react';
import Input from '../Button/Input';
import Button from '../Button/ButtonWithSpinner';
import ErrMsg from '../Msgs/ErrMsg';
import SuccessMsg from '../Msgs/SuccessMsg';
import 'bootstrap/dist/css/bootstrap.min.css';

import { signInStart } from '../redux/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

import { selectIsLoading, selectErrMsg, selectSuccessMsg } from '../redux/selectors/userSelector';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles((theme) => ({
	root: {
	  height: '100vh',
	},
	image: {
	 // backgroundImage: 'url(https://i.pinimg.com/originals/85/dd/07/85dd0734b8922a6478016dc1b27ce9b4.gif)',
	  backgroundImage: 'url(https://i.pinimg.com/originals/10/60/25/106025fc18c12b7fc6223f10657ab5b7.gif)',
	  backgroundRepeat: 'no-repeat',
	  backgroundColor:
		theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
	  backgroundSize: 'cover',
	  backgroundPosition: 'center',
	},
  
	paper: {
	  margin: theme.spacing(8, 4),
	  display: 'flex',
	  flexDirection: 'column',
	  alignItems: 'center',
	},
	avatar: {
	  margin: theme.spacing(1),
	  backgroundColor: theme.palette.secondary.main,
	},
	form: {
	  width: '100%', // Fix IE 11 issue.
	  marginTop: theme.spacing(1),
	},
	submit: {
	  margin: theme.spacing(3, 0, 2),
	},
  }));

function Loginadmin(props) {

	const dispatch = useDispatch();
	const isLoading = useSelector(state => selectIsLoading(state));
	let errMsg = useSelector(state => selectErrMsg(state));
	const successMsg = useSelector(state => selectSuccessMsg(state));

	const [input, setInput] = useState({ username: '', password: '' });
	const { username, password } = input;

	useEffect(() => {
		document.title = 'Login';
	})

	const handleClick = e => {
		dispatch(signInStart(input));
	}

	const handleChange = e => {
		const { name, value } = e.target;
		errMsg = '';

		setInput(prev => {
			return {
				...prev,
				[name]: value
			}
		})
	}

	const classes = useStyles();

	return (
	
	<div className="login-page">
		<Grid container component="main" className={classes.root}>
			  <CssBaseline />
			  <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        
          <h1>
          Se connecter
          </h1>
  

			{ successMsg ? <SuccessMsg text={successMsg} /> : '' }
			<Input type='text' name='username'  placeholder='Clé' value={username} onChange={handleChange} />
			
			<Input type='password' name='password' placeholder='Mot de passe' value={password} onChange={handleChange} />
			{
				errMsg ? <ErrMsg text={errMsg} /> : ''
			}
			<Button handleClick={handleClick} isLoading={isLoading} />
	
        </div>
      </Grid>
    </Grid>
	 </div>
	);
}

export default Loginadmin;