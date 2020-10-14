import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

const fname = "Raji";
const lname = "Bathula";
const currentDate = new Date().toDateString();
const currentTime = new Date().toLocaleTimeString();

ReactDOM.render(
      <React.Fragment>
          <h1 className="heading">  {` ${fname} ${lname}  React App`} </h1>
          <div className="content">
             <h1 contentEditable="true">Welcome to Indian cuisine</h1>
             <h4>menu</h4>
             <ol>
                <li>chicken Biryani</li>
                <li>cashew pakoda</li>
                <li>Gulab jamun</li>
             </ol>
             <p>Current Date is {currentDate}</p>
             <p>Current Date is {currentTime}</p>
             <img src="https://picsum.photos/seed/picsum/200/300" alt="random images picsum" />
          </div>
        </React.Fragment>,
  document.getElementById('root'));