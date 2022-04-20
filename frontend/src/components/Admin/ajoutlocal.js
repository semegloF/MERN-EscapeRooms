import React from 'react';
import axios from 'axios';
import logo from './canada.jpg';

class Ajoutlocal extends React.Component {

    constructor(props) {
      super(props);
  
      this.onChangeLocal = this.onChangeLocal.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
        local: ''
      }
    }
  
    onChangeLocal(e) {
      this.setState({
        local: e.target.value
      })
    }


    onSubmit(e) {
      e.preventDefault();
  
      const local = {
        local: this.state.local
      }
  
      console.log(local);
  
      axios.post('http://10.30.40.121:3528/Addlocal', local)
        .then(res => console.log(res.data));
  
      this.setState({
        local: ''
      })
    }
  
    render() {
      return (

        <div className=".container-fluid">
      
        <div class="row">
        <div class="col-6">
      
        <img src={logo} alt="Logo" />
      
        </div>

        <div class="col-4"><br/>
          <h3>Ajouter une nouvelle adresse</h3><br/>
          <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
              <label>Adresse: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.local}
                  onChange={this.onChangeLocal} />

            </div>
            <div className="form-group">
              <input type="submit" value="Ajout" className="btn btn-primary" />
            </div>
          </form>
        </div>
        </div>
        </div>
      )
    }
  }
  
export default Ajoutlocal;