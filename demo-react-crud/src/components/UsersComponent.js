import React, { Component } from 'react';

class UsersComponent extends Component {
   constructor(props){
       super(props);
       this.onDelete=this.onDelete.bind(this)
   }
   onDelete(){
       this.props.onDelete(this.props.id);
   }
    render() { 
        return ( 
        <li onClick={this.onDelete}>{this.props.name},{this.props.email}</li>
         );
    }
}
 
export default UsersComponent;