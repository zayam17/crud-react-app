import React, { Component } from 'react';

class UserForm extends Component {
 constructor(props){
     super(props);
     this.onAddClick=this.onAddClick.bind(this);
 }

onAddClick(){
    let user={};
    user.name=this.refs.name.value;
    user.email=this.refs.email.value;
    this.props.onAddUser(user);

}

    render() { 
        return ( 
            <div>
                <span>Enter name: </span>
                <input type="text" ref="name" /><br/><br/>
                <span>Enter email : </span>
                <input type="text" ref="email" /><br/><br/>
                <button onClick={this.onAddClick}>Add User</button>

            </div>
         );
    }
}
 
export default UserForm;