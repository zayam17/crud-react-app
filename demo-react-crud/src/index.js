import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import  UserComponent from './components/UserComponent';
import {loadUsers} from './actions/userAction';

const store=configureStore();
store.dispatch(loadUsers())

ReactDOM.render(
    <Provider store={store}>
        <UserComponent />
    </Provider>,document.getElementById('root')
)