import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CustomerList from './CustomerList';
import { Router, Route, Link, Switch, Redirect } from "react-router-dom";
import history from './router-history';
import { Provider } from 'react-redux';
import store from './store';
import LoginUserContainer from './LoginUserContainer';

ReactDOM.render((
  <Provider store={store}>
    <Router history = {history}>
        <Switch>
          <Route path = "/" exact component = {LoginUserContainer} />
          <Route path = "/customer-list" component = {CustomerList} /> 
        </Switch>
    </Router>
  </Provider>

), document.getElementById('root'));
