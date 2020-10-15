import React from 'react';

function List(){
    return(
        <ol>
                <li>chicken Biryani</li>
                <li>cashew pakoda</li>
                <li>Gulab jamun</li>
        </ol>
    );
};

const currentDate = new Date().toDateString();
const currentTime = new Date().toLocaleTimeString();
function Hours(a,b){
    return(
    <div>
     <p>{a+b}</p> 
    <p>Current Date is {currentDate}</p>
    <p>Current Date is {currentTime}</p>
    </div>
    );
};

export default List;
export {Hours};
