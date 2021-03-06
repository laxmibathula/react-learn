import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

const  TableList = (props) => {
   
    return(
        <>
        {/* <Link to="/">login</Link>    */}

        <table className='customers-table'>
            <thead className="table-head">
                <tr>
                {   
                     props.headers.map((headerObj,index) => { 
                              return(<th key={index}>{headerObj.display}</th>)       
                      })
                    
                }
               </tr>
             </thead>
             <tbody className="table-data">
            {
                props.list.map((user,rowIndex) => {         
                    return(
                        <tr key={rowIndex}>
                        {
                            props.headers.map((headerObj,colIndex) =>{
                               return <td key={colIndex}>{user[headerObj.key]}</td>
                            })
                        }
                        </tr>
                    )
                })
            } 
             </tbody>
         </table>
       </>
    )
  
}

export default TableList;