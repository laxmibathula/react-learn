import React from 'react';
import { connect } from 'react-redux';
import './style.css';
import { loginUser } from '../actions/user';


    class LoginContainer extends React.Component{  
      constructor(props) {
          super(props);
           this.state = {
                email:"",
                password:null,
                data:""
          };
      }
      myChangeHandler = (event) => {
          var name = event.target.name;
          var value = event.target.value
          this.setState({[name]:value})      
      } 
      onSubmit = (e) => {
          e.preventDefault();
          const {email,password } = this.state;
          this.props.buyCake(email,password)
      }   
     render(){
        const loading = this.props.login.login_loading
        if(loading){
          alert(loading);
        }
      return(
          <div className="form">
            <h1 className="name">welcome to Raji's React-Webpack-Redux</h1>
            <h2>{JSON.stringify(this.props.login.login_list)}</h2>

            <div className="email">
              <label htmlFor="email">Email or phone </label> <br />
              <input type="email"  name="email" onChange={this.myChangeHandler}/>
            </div>
  
            <div className="pass">
              <label htmlFor="password">password</label> <br />
              <input type="password" name="password" onChange={this.myChangeHandler} /><br />
            </div>
  
            <div className="log">
            <button type="submit" onClick={this.onSubmit}>submit</button>
            </div>  
          </div> 
      
      )
     }
  }
  const mapStateToProps = state => {
    return {
      login: state.login
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      buyCake: (email,password) => dispatch(loginUser(email,password))
    }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer)

  
