import React from 'react';
import './style.css';
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
          const userList = this.props.user.userList;
          console.log("userList is ", userList );
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
                        list={userList}
                      />
                    </>
                )
      }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(CustomerList);

