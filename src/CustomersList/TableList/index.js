import React from 'react';
import './style.css';


function TableList(){
    return(
     
                <table className='customers_table'>
                   <thead className="table_head">
                      <tr> 
                           <th>Id</th> 
                           <th>Name</th> 
                           <th>Address</th> 
                           <th>Email</th> 
                           <th>Password</th>
                      </tr>
                    </thead>
                    <tbody className="table_data">
                      <tr>
                           <td>1</td>
                           <td>Jill</td>
                           <td>567</td>
                           <td>hjgjhg</td>
                           <td>78</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Eve</td>
                        <td>Ja6567</td>
                        <td>9hjgbk4</td>
                        <td>7879</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Eve</td>
                        <td>Ja6567</td>
                        <td>9hjgbk4</td>
                        <td>7879</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Eve</td>
                        <td>Ja6567</td>
                        <td>9hjgbk4</td>
                        <td>7879</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Eve</td>
                        <td>Ja6567</td>
                        <td>9hjgbk4</td>
                        <td>7879</td>
                      </tr>
                    </tbody>
                </table>
        

    )
}

export default TableList;