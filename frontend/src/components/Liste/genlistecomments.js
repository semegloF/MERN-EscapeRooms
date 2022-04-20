import React from 'react';
// import { Link } from 'react-router-dom';

class GenListecomment extends React.Component {
  render() {
  return (
   <tr>
     <td>{this.props.comment.comment}</td>
     <td>{this.props.comment.name}</td>
  
     {/* <td>
        <a href="#" onClick={()=> {this.props.deletecomment(this.props.comment._id)}}>suppression</a> 
    </td> */}

</tr>
  );
}
}

export default GenListecomment;