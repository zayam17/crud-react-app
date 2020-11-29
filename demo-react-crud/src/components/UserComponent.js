import userEvent from '@testing-library/user-event';
import React, { Component } from 'react';
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userAction from '../actions/userAction';
import UsersApi from '../data/UserApi';
import UserForm from './UserForm';


var currentID=0;
class UserComponent extends Component {
    constructor(props){
        super(props);
        this.addUser=this.addUser.bind(this);
        this.deleteUser=this.deleteUser.bind(this);
      
}
    
    addUser(users){
        this.props.actions.addUser(users)
    }
    deleteUser(id,e){
        this.props.actions.deleteUser(id,e)
    }
    updateUser(id){
        this.props.actions.updateUser(id)
    }
 

  render() { 
        return ( 
            <div>
                <UserForm onAddUser={this.addUser} />
            <table className="table table-bordered">
                <thead>
                  <tr>
                      
                      <th>name</th>
                      <th>email</th>
                      
                  </tr>
                </thead>
      
                <tbody>
                  {this.props.users.map((user) => (
                    <tr>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                     
                      <td>
                        <button className="btn btn-danger" onClick={(e) =>this.deleteUser(user.id,e)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
      
            </table>
          </div>
         
         
        )
             }

}

/*
<div>
                <UserForm onAddUser={this.addUser} />
            <ul>
                  {this.props.users.map(user =>
<li key={user.id} >{user.name} ,{user.email}</li>) }
                </ul> 
            </div>
*/

function mapStateToProps(state,ownProps){
    return{
users:state.users
};
}

function mapDispatchToProps(dispatch){
    return{
        actions:bindActionCreators(userAction,dispatch)
    };
}
 
export default connect(mapStateToProps,mapDispatchToProps)(UserComponent);