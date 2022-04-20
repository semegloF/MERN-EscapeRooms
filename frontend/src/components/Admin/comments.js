import React from 'react';
import axios from 'axios';
import GenListecomment from '../Liste/genlistecomments';

class Comments extends React.Component {

constructor(props){
  super(props);
  this.deletecomment = this.deletecomment.bind(this)
  this.state={
    comments:[]
  }
}

componentDidMount() {
  axios.get('http://10.30.40.121:3528/Selectcomment')
    .then(response => {
if (response.data.length>0){
      this.setState({
        comments:response.data})
}
    })
    .catch((error) => {
      console.log(error);
    })
}

deletecomment(id) {
  axios.delete('http://10.30.40.121:3528/Deletecomment/'+id)
    .then(response => { console.log(response.data)});

  this.setState({
    comments: this.state.comments.filter(el => el._id !== id)
  })
}

commentList(){
return this.state.comments.map(commentCourant => {
return <GenListecomment comment={commentCourant} deletecomment={this.deletecomment}  key={commentCourant._id}/>;
})}

   render() {
    return (
      
      <div className="container">
      <h3>Liste des utilisateurs  </h3>
      <table className="table">
      <thead className="thead-light">
       <tr>
           <th>Comment</th>
           <th>Name</th>
      
           
           
       </tr>
     
      </thead>
      
      <tbody>
    {this.commentList()}
    
      </tbody>
      

      </table>
   
      </div> );
  }
}
  
export default Comments;