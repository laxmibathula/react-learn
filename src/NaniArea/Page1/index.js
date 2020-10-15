import React from 'react';
import './index.css';

import Header from '../Header/index';
import Footer from '../Footer/index';

function Page1(){
  return (
  	<>
	  	<Header /> 	
		<div>Page1 I am in the middle</div>
		<Footer />
	</>
  );
}

export default Page1;