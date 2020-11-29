import axios from 'axios';
import {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE} from './userTypes';

export const fetchUsers = (email,password) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest())
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
        console.log("hiii im hereeeeee");
        dispatch(fetchUsersSuccess([{
            name:'raji',
            age:40
          }]
        ))  
    }).catch((error) => {
    alert("somthing went wrong");
    dispatch(fetchUsersFailure(error))
    console.log(error);	
  })
  }
}

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}
