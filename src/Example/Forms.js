import React from 'react';

class Forms extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
          username: '' ,
          lastname:'',
          pass:''
        };
    }
    myChangeHandler = (event) => {
        var uname = event.target.name;
        var value = event.target.value
        this.setState({[uname]:value});
          
    }
    valueChange = (event) =>{
        this.setState({pass:event.target.value});
    }
    onSubmit = () =>{
        alert("submited the username" + " " + this.state.username);
    }

    render() {
        console.log(this.state.username);
        console.log(this.state.pass);
      return (
        <form>
        <h1>Hello {this.state.username} {this.state.lastname}</h1>
        <p>Enter your name:</p>
        <input type='text' name="username" onChange={this.myChangeHandler}/>
        <input type='text' name="lastname" onChange={this.myChangeHandler}/>
        <input type="password" name="pass" onChange={this.valueChange} />
        <button type="submit" onClick={this.onSubmit}>submit</button>      
        </form>
      );
    }
  }


export default Forms;