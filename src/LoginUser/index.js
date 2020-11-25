import React from 'react';
import './style.css';

class LoginUser extends React.Component{  
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

        fetch('http://localhost:8086/login', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email,password})
        })      
	    .then((response) => {
			console.log(response);
		    if(response.status == 400){
			    alert("invalid user");
			   e.preventDefault();
	        }
	      else 
		    return response.json();
		    
        }).then((data) =>{
                this.setState({data:data});
                this.props.history.push("/customer-list");
			    
	    }).catch((error) => {
		    alert("somthing went wrong");
				console.log(error);	
	    })
    }   
   render(){
    return(
        <div className="form">
          <h1 className="name">welcome to Raji's Webpack</h1>
          <div className="email">
            <label for="email">Email or phone </label> <br />
            <input type="email"  name="email" onChange={this.myChangeHandler}/>
          </div>

          <div className="pass">
            <label for="password">password</label> <br />
            <input type="password" name="password" onChange={this.myChangeHandler} /><br />
          </div>

          <div className="log">
          <button type="submit" onClick={this.onSubmit}>submit</button>
          </div>  
        </div> 
    
    )
   }
}

export default LoginUser;