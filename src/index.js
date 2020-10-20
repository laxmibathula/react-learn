import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Table/Header/Header';
import Count from './Table/Count/Count';
import Body from './Table/Body/Body';

import NaniAreaPage1 from './NaniArea/Page1/index';

// NOTE to Raji: I have commented NaniAreaPage1 and NaniAreaPage3 below, remove comments to see.

// const fname = "Raji";
// const lname = "Bathula";

ReactDOM.render(
      <React.Fragment>
      <Header />
      <Count />
      <Body />
      </React.Fragment>,
  document.getElementById('root')
);