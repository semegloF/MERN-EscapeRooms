import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
  render() {

  return (
  <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
    <Link to="/" className="navbar-brand">Bienvenue</Link>
    <div className="navbar-collapse">
      <ul className="navbar-nav">
        
        <li className="navbar-item">
          <Link to="/signupclient" className="nav-link">S'inscrire</Link>
</li>
<li className="navbar-item">
          <Link to="/Category" className="nav-link">Client</Link>
</li>
<li className="navbar-item">
          <Link to="/loginadmin" className="nav-link">Administrateur</Link>
</li>

</ul>
</div>
</nav>
  )
  }
}
export default Navbar;