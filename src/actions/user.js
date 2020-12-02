import * as userApi from '../api/user';
import {createBrowserHistory} from 'history';
import {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE} from '../constants/user';
import {LOGIN_USER_REQUEST,LOGIN_USER_SUCCESS,LOGIN_USER_FAILURE} from '../constants/user';

const history = createBrowserHistory();

export const loginUser = (email,password) => {
  return (dispatch) => {
      dispatch({
        type: LOGIN_USER_REQUEST
      })
      userApi.loginUser(email,password)
      .then((result) =>{
        dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: result
        }) 
        history.push('/customer-list');
      })
      .catch((error) =>{
        dispatch({
          type: LOGIN_USER_FAILURE,
          payload: error
        })
      })
  }
}

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_USERS_REQUEST
    })
    userApi.fetchUsers()
    .then( results => {
      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: results
      }) 
    })
    .catch( error => {
      dispatch({
        type: FETCH_USERS_FAILURE,
        payload: error
      })
    })  
  }
}

