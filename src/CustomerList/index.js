import React from 'react';
import './index.css'
import Header from './Header/index';
import Count from './Count/index';
import TableList from './TableList/index';

function CustomerList(){
    return(
        <>
         <Header />
         <Count />
         <TableList />
        </>
    )
}

export default CustomerList;