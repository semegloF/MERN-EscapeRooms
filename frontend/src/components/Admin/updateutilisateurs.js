import React from 'react';
import axios from 'axios';
import logo from './picc.png';

class Updateutilisateurs extends React.Component {

  constructor(props){
    super(props);
    this.onChangeLocal = this.onChangeLocal.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeNom = this.onChangeNom.bind(this);
    this.onChangePrenom = this.onChangePrenom.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);


    this.onSubmit = this.onSubmit.bind(this);
  
    this.state={
     local:'' , username:'', nom:'', prenom:'',email:'',password:'', deps:[]
    }
  }

componentDidMount() {

  console.log(this.props.match.params.id)
  axios.get('http://10.30.40.121:3528/Select/'+this.props.match.params.id)
    .then(response => {

      this.setState({
        local: response.data.local,
        username: response.data.username,
        nom: response.data.nom,
        prenom: response.data.prenom,
        email: response.data.email,
        password: response.data.password,
        id:this.props.match.params.id
      })   })
    .catch((error)=> {
      console.log(error);
    })


    axios.get('http://10.30.40.121:3528/Selectt/')
    .then(response => {
      if (response.data.length > 0) {
        this.setState({
          deps: response.data.map(dep => dep.local),
        })
      }
    })
    .catch((error) => {
      console.log(error);
    })





console.log(this.state.id)

}

onChangeLocal(e){ this.setState({
  local:e.target.value
})
}

onChangeUsername(e){ this.setState({
  username:e.target.value
})
}


onChangeNom(e){ this.setState({
    nom:e.target.value
  })
}
onChangePrenom(e){  this.setState({
    prenom:e.target.value
  })
}

onChangeEmail(e){ this.setState({
  email:e.target.value
})
}

onChangePassword(e){ this.setState({
  password:e.target.value
})
}

onSubmit(e){ e.preventDefault();
  const util={
    local:this.state.local,
    username:this.state.username,
    nom:this.state.nom,
    prenom:this.state.prenom,
    email:this.state.email,
    password:this.state.password,

  }

  console.log(util);

  axios.post('http://10.30.40.121:3528/Update/'+ this.props.match.params.id, util)
  .then(res => console.log(res.data));
  window.location = '/utilisateurs';
}


  render() {
  return (

<div className=".container-fluid">
      
      <div class="row">
      <div class="col-6">
      
      <img src={logo} alt="Logo" />

      </div>
<div class="col-3">
<br/>
    
<h2>Modifier/Mettre à jour les informations </h2><br/>
   <form onSubmit={this.onSubmit}>
<div className="form-group">
<div class="col-12">

<label>les adresses disponibles...</label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.local}
              onChange={this.onChangeLocal}>
              {
                this.state.deps.map(function(dep) {
                  return <option 
                    key={dep}
                    value={dep}>{dep}
                    </option>;
                })
              }
          </select></div>
          <div class="col-12">


<label>Surnom :</label>
  <input type="text"
  required
  className="form-control"value={this.state.username}onChange={this.onChangeUsername}/></div>
<div class="col-12">
  <label>Nom :</label>
  <input type="text"
  required
  className="form-control" value={this.state.nom} onChange={this.onChangeNom}/></div>
<div class="col-12">
<label>Prénom :</label>
  <input type="text"
  required
  className="form-control"value={this.state.prenom}onChange={this.onChangePrenom}/></div>
<div class="col-12">
<label>Courriel :</label>
  <input type="email"
  required
  className="form-control"value={this.state.email}onChange={this.onChangeEmail}/></div>

</div>
<div class="col-12">
<div className="form-group">
  <input type="submit" value="Modifier" className="btn btn-primary"/>
</div>     </div> 
   </form>
    </div>
    </div>     
    </div> 


  );
}
}
  
export default Updateutilisateurs;