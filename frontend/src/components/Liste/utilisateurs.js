import React from 'react';
import GenListe from '../Liste/genliste'
import axios from 'axios';
import Gestion from '../Admin/gestion';
import Comments from '../Liste/comments';
import Background from '../Liste/back.jpg';



class Liste extends React.Component {

constructor(props){
  super(props);
  this.deleteUser = this.deleteUser.bind(this)
  this.state={
    utilisateurs:[]
  }
}

componentDidMount() {
  axios.get('http://10.30.40.121:3528/Select')
    .then(response => {
if (response.data.length>0){
      this.setState({
        utilisateurs:response.data})
}
    })
    .catch((error) => {
      console.log(error);
    })
}

deleteUser(id) {
  axios.delete('http://10.30.40.121:3528/Delete/'+id)
    .then(response => { console.log(response.data)});

  this.setState({
    utilisateurs: this.state.utilisateurs.filter(el => el._id !== id)
  })
}

userList(){
return this.state.utilisateurs.map(utilCourant => {
return <GenListe utilisateur={utilCourant} deleteUser={this.deleteUser}  key={utilCourant._id}/>;
})}



   render() {



    
    return (
      <div     style={{
        background: `url(${Background})`,
      }}>
      <div className=".container-lg">


        <br/>
      <h3>   &nbsp; &nbsp;La liste des utilisateurs  </h3>
      <table className="table">
      <thead className="thead-light">
       <tr>
           <th> Abonner sur l'adresse</th>
           <th>Prénom</th>
           <th>Nom</th>
           <th>Surnom</th>
           <th>Courriel</th>
           <th>Mot de passe</th>
           
           
       </tr>
     
      </thead>
      
      <tbody>
    {this.userList()}
    
      </tbody>
      

      </table>
      <Comments />
      <Gestion />
      </div>
      </div> );
  }
}
  
export default Liste;