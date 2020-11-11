import React from 'react';
import './index.css'
import Header from '../components/Header';
import Count from './Count/index';
import TableList from '../components/TableList';


class CustomerList extends React.Component {
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
            if(error){
                  console.log(error);
                  return <div>Error: {error}</div>;
            }
           
            return(
                    <>
                        <Header />
                        <Count />
                        <TableList 
                          headers={[
                            {key:"id",display:"ID"},
                            {key:"name",display:"NAME"},
                            {key:"address",display:"ADDRESS"},
                            {key:"Email",display:"EMAIL"},
                            {key:"password",display:"PASSWORD"}
                          ]} 
                          list={list}
                        />
                     </>
                  )
        }
    }

  

export default CustomerList;