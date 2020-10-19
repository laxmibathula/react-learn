import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import List, { Hours } from './Compo';
import App from './App';

const fname = "Raji";
const lname = "Bathula";

const styles ={
   color : 'red'
};

ReactDOM.render(
      <React.Fragment>
          <h1 className="heading"> {fname} {lname}  React App </h1>
          <div className="content">
             <h1 contentEditable="true">Welcome to Indian cuisine</h1>
             <h4>menu</h4>
             <p style={styles}> Select any item from the list</p>
             <List />
             <App />
            {Hours(3,3)}
          </div>
        </React.Fragment>,
  document.getElementById('root'));