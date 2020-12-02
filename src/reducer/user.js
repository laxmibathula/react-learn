import {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE} from '../constants/user';
import {LOGIN_USER_REQUEST,LOGIN_USER_SUCCESS,LOGIN_USER_FAILURE} from '../constants/user';

 export const initialState = {
    loginLoading: false,
    loginUser: {},
    loginError: '',
    userLoading: false,
    userList: [],
    userError: ''
  }
  
  const user = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_USER_REQUEST:
        return {
          ...state,
          loginLoading: true
        }
      case LOGIN_USER_SUCCESS:
        return {
            loginLoading: false,
            loginUser: action.payload,
            loginError: ''
        }
      case LOGIN_USER_FAILURE:
        return {
            loginLoading: false,
            loginUser: {},
            loginError: action.payload
        }
      case FETCH_USERS_REQUEST:
        return {
          ...state,
          userLoading: true
        }
      case FETCH_USERS_SUCCESS:
        return {
          userLoading: false,
          userList: action.payload,
          userError: ''
        }
      case FETCH_USERS_FAILURE:
        return {
          userLoading: false,
          userList: [],
          userError: action.payload
        }
      default: return state
    }
  }
  
  export default user;