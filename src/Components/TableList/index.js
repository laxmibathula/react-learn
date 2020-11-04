import React from 'react';
import './style.css';

const  TableList = (props) => {
    return(
        <table className='customers-table'>
               <thead className="table-head">
                    <tr> 
                       <th>Id</th> 
                       <th>Name</th> 
                       <th>Address</th> 
                       <th>Email</th> 
                       <th>Password</th>
                    </tr>
             </thead>
             <tbody className="table-data">
                {
                  props.data.map((value,index) => {
                        return( <tr key={index}>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.address}</td>
                                    <td>{value.Email}</td>
                                    <td>{value.password}</td>
                                </tr>
                            )
                    })
                }   
             </tbody>
         </table>

    )
  
}

export default TableList;