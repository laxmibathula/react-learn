import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Table/Header/Header';
import Body from './Table/Body/Body';

import NaniAreaPage1 from './NaniArea/Page1/index';

// NOTE to Raji: I have commented NaniAreaPage1 and NaniAreaPage3 below, remove comments to see.

// const fname = "Raji";
// const lname = "Bathula";

ReactDOM.render(
      <React.Fragment>
      <Header />
      <Body />
      </React.Fragment>,
  document.getElementById('root'));