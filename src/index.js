import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import List, { Hours } from './Compo';
import App from './App';

import NaniAreaPage1 from './NaniArea/Page1/index';
import NaniAreaPage2 from './NaniArea/Page2/index';
import NaniAreaPage3 from './NaniArea/Page3/index';

// NOTE to Raji: I have commented NaniAreaPage1 and NaniAreaPage3 below, remove comments to see.

const fname = "Raji";
const lname = "Bathula";

const styles ={
   color : 'red'
};

ReactDOM.render(
      <React.Fragment>
          <h1 className="heading">  {` ${fname} ${lname}  React App`} </h1>
          <div className="content">
             <h1 contentEditable="true">Welcome to Indian cuisine</h1>
             <h4>menu</h4>
             <p style={styles}> Select any item from the list</p>
             <List />
             <App />
            {Hours(3,3)}

            {/* <NaniAreaPage1 name="Deepsika" /> */}
            <NaniAreaPage2 />
            {/* <NaniAreaPage3 /> */}
          </div>
        </React.Fragment>,
  document.getElementById('root'));