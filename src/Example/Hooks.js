import React, { useState,useEffect } from 'react';

const Hooks = () => {
  const [list,setList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8086/table-data',{
      method:"GET",
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setList(data);
    })
    .catch(err => console.log(err));
  }, []);

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
                             list.map((value,index) => {
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

export default Hooks;