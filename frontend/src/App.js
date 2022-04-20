import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from 'jquery';
import {BrowserRouter as Router,Redirect, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Signupclient from './components/Client/signupclient';
import Category from './components/Client/Category';
import Prisons from './components/Client/Prisons';
import Horror from './components/Client/Horror';
import Investigator from './components/Client/Investigator';
import Tofill from './components/Client/tofill';
import Ajoutcomment from './components/Client/ajoutcommet';
import Loginadmin from './components/Admin/loginadmin';
import Ajoutlocal from './components/Admin/ajoutlocal';
import Liste from './components/Liste/utilisateurs';
import Updateutilisateurs from './components/Admin/updateutilisateurs';
import { useDispatch, useSelector } from 'react-redux';
import { checkUserSession } from './components/redux/actions/userActions';
import { selectCurrentUser } from './components/redux/selectors/userSelector';
import Dashboard from './components/Dashboard/Dashboard';
function App() {
  const dispatch = useDispatch();
  
  const currentUser = useSelector(state => selectCurrentUser(state));

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])

  return (


      <Router>

    <Route exact path="/">
      <Redirect to="/Home"/> 
    </Route>
   
    <Navbar/>
    <Route path="/Home"  component={Home}/>
   
          <Route   path='/loginadmin' exact render={() => currentUser ? (<Redirect to='/utilisateurs' />) : <Loginadmin />} />
          <Route  path='/utilisateurs' exact  render={() => currentUser ? <Liste /> : <Redirect to='/loginadmin' />}  />

    
<Route path='/Prisons' component={Prisons}/>
<Route path='/tofill' component={Tofill}/>
<Route path='/tofill' component={Tofill}/>
<Route path='/Horror' component={Horror}/>
<Route path='/ajoutcomment' component={Ajoutcomment}/>
<Route path='/comments' component={Comment}/>
<Route path='/ajoutlocal' component={Ajoutlocal}/>
<Route path='/signupclient' component={Signupclient}/>
<Route path='/Category' component={Category}/>
<Route path='/Investigator' component={Investigator}/>
<Route path='/updateutilisateurs/:id' component={Updateutilisateurs}/>


    </Router>
    
  ); }

export default App;