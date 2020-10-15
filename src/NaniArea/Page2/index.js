import React from 'react';
import './index.css';

import Header from '../Header/index';
import Footer from '../Footer/index';

const list = [
	{ name: 'name1', country: 'NL'},
	{ name: 'name2', country: 'FR'},
	{ name: 'name3', country: 'USA'},
	{ name: 'name4', country: 'IND'}
];

function Page2(){
  return (
  	<div className="nani-page1">
	  	<Header /> 
	    <table>
	      <thead>
			  <tr>
			    <th>Name</th>
			    <th>Country</th>			    
			  </tr>
		  </thead>
		  <tbody>
		  	{
		  	  list.map((eachObj, index) => {
				  return(
				  	<tr key={index}>
					    <td>{eachObj.name}</td>
					    <td>{eachObj.country}</td>		   
					 </tr>
				  )
				})
			}
		  </tbody>
		</table>
		<Footer />
	</div>
  );
}

export default Page2;