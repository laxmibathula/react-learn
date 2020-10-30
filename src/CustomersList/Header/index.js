import React from 'react';
import './style.css';

function  Header(){
    return(
          <>
          <div className="head">    
          <div className="inhead"> 
            <h2 >Welcome to Facebook</h2>
            <button>Log Out</button>
          </div>
          </div> 
          </>
    )
}

export default Header;