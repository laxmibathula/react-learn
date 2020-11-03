import React from 'react';
import './style.css';

class TableList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      list: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8086/table-data',{
      method:"GET",
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.json())
    .then(result => {
      this.setState({
        list: result
      })
    })
    .catch(error => 
      this.setState({
        error: "somthing went wrong"
      })
    );
  }

  render() {
        const { error,list } = this.state;
        if (error) {
                    console.log(error);
                    return <div>Error: {error}</div>;
        }
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
}

export default TableList;