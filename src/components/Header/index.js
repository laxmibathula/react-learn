import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';


function  Header(){
    return(
          
        <div className="head">    
          <div className="inhead"> 
            <h2 >Welcome to Facebook</h2>
            <button className='logout'><Link to="/"> Log Out</Link></button>
          </div>
        </div> 
        
    )
}

export default Header;