import React from 'react';
import './index.css';

import Header from '../Header/index';
import Footer from '../Footer/index';

function Page1(props){
  return (
  	<>
	  	<Header /> 	
		<div>Page1 I am in the middle {props.name}</div>
		<Footer />
	</>
  );
}

export default Page1;