import React from 'react';
import './index.css';

import Header from '../Header/index';
import Footer from '../Footer/index';

class Page3 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: ''
		};
	}

	handleChange = (event) => {
		console.log(event.target.value);

		// Below is updating the state(input value)
		this.setState({
			email: event.target.value
		});
	}

	handleClick = () => {
		// do something with input values
		console.log('this is email: ' + this.state.email);
	}

	render() {
		return (
			<>
				<Header /> 	
				<div className="page3-body">
					<input
						type="text" 
						onChange={this.handleChange} 
						value={this.state.email}
						placeholder="Type email here"
					/>

					<button onClick={this.handleClick}>Save</button>
				</div>
				<Footer />			
			</>
		);
	}
};

export default Page3;