import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CustomerList from './CustomerList';
import LoginUser from './LoginUser';
import { Router, Route} from 'react-router';
import {createBrowserHistory} from 'history';

ReactDOM.render((
    <Router history = {createBrowserHistory()}>
          <Route path = "/login" component = {LoginUser} />
          <Route path = "/customer-list" component = {CustomerList} /> 
    </Router>
 ), document.getElementById('root'));