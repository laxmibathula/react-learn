import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CustomerList from './CustomerList';
import LoginUser from './LoginUser';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import {createBrowserHistory} from 'history';
import { Provider } from 'react-redux';
import store from './redux/store';


ReactDOM.render((
  <Provider store={store}>
    <Router history = {createBrowserHistory(store)}>
        <Switch>
          <Route path = "/" exact component = {LoginUser} />
          <Route path = "/customer-list" component = {CustomerList} /> 
        </Switch>
    </Router>
  </Provider>

), document.getElementById('root'));
