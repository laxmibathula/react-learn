import React from 'react';
import './index.css'
import Header from '../components/Header';
import Count from './Count/index';
import TableList from '../components/TableList';
import { fetchUsers } from '../actions/user';
import { connect } from 'react-redux';

class CustomerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

    }
    componentDidMount() {
        this.props.fetchUsers();
       
    }
    render() {
          const { error,list } = this.state;
          if(error){
                return <div>Error: {error}</div>;
          }
          const userData = this.props.user.user_list;
          return(
                  <>
                      <Header />
                      <Count />
                      {/* <h2>{JSON.stringify(this.props.list.users[0])}</h2> */}
                      <TableList 
                        headers={[
                          {key:"id",display:"ID"},
                          {key:"name",display:"NAME"},
                          {key:"address",display:"ADDRESS"},
                          {key:"Email",display:"EMAIL"},
                          {key:"password",display:"PASSWORD"}
                        ]} 
                        list={userData}
                      />
                    </>
                )
      }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    error: state.user.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(CustomerList);

