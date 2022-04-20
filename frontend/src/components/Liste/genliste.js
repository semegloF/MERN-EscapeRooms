import React from 'react';
import { Link } from 'react-router-dom';

class GenListe extends React.Component {
  render() {
  return (
   <tr>
     <td>{this.props.utilisateur.local}</td>
     <td>{this.props.utilisateur.nom}</td>
     <td>{this.props.utilisateur.prenom}</td>
     <td>{this.props.utilisateur.username}</td>
     <td>{this.props.utilisateur.email}</td>
     <td>**************</td>
     <td>
        <Link to={"/updateutilisateurs/"+this.props.utilisateur._id}>modifier</Link>  | <a href="#" onClick={()=> {this.props.deleteUser(this.props.utilisateur._id)}}>suppression</a> 
    </td>

</tr>
  );
}
}

export default GenListe;