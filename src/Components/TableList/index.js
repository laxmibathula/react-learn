import React from 'react';
import './style.css';

const  TableList = (props) => {
    return(
        <table className='customers-table'>
            <thead className="table-head">
                {
                    <tr> 
                       <th>{props.headers[0]}</th> 
                       <th>{props.headers[1]}</th> 
                       <th>{props.headers[2]}</th> 
                       <th>{props.headers[3]}</th> 
                       <th>{props.headers[4]}</th>
                    </tr>
               }
             </thead>
             <tbody className="table-data">
                {
                  props.list.map((value,index) => {
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