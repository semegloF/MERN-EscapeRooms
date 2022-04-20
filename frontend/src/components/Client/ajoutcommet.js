import React from 'react';
import axios from 'axios';
import logo from './avis.jpg';
import team from './team.gif';

class Ajoutcomment extends React.Component {

    constructor(props) {
      super(props);
  
      this.onChangeComment = this.onChangeComment.bind(this);
      this.onChangeName = this.onChangeName.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
        comment: '',
        name:''
      }
    }
  
    onChangeComment(e) {
      this.setState({
        comment: e.target.value
      })
    }
    onChangeName(e) {
      this.setState({
        name: e.target.value
      })
    }

    onSubmit(e) {
      e.preventDefault();
  
      const comment = {
        comment: this.state.comment,
        name: this.state.name
      }
  
      console.log(comment);
  
      axios.post('http://10.30.40.121:3528/Addcomment', comment)
        .then(res => console.log(res.data));
  
      this.setState({
        comment: '',
        name:''
      })
    }
  
    render() {
      return (

        <div className=".container-fluid">
      
        <div class="row">
        <div class="col-3">
        <img src={team} alt="Logo" />
      
        </div>

        <div class="col-9"><br/>
         

        <img src={logo} alt="Logo" /><br/>
        <div class="col-9"><br/>
          <h3>Laissez-nous un retour d'information sur votre expérience.<br/> Et dites nous s'il y a des choses qu'on peut améliorer.<br/>
           </h3><br/></div>
          <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
            <div class="col-10">
              <label>Rédiger votre commentaire : </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.comment}
                  onChange={this.onChangeComment} /></div>
<div class="col-2">
<label>Votre nom : </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.name}
                  onChange={this.onChangeName} /></div>

            </div>
            <div class="col-3">
            <div className="form-group">
              <input type="submit" value="Soumettre" className="btn btn-primary" /></div>
            </div>
          </form>
        </div>
    
        </div>
        </div>
      )
    }
  }
  
export default Ajoutcomment;