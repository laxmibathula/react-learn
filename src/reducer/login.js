import {LOGIN_USER_REQUEST,LOGIN_USER_SUCCESS,LOGIN_USER_FAILURE} from '../constants/user';
import {initialState} from './user';

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_USER_REQUEST:
        return {
          ...state,
          login_loading: true
        }
      case LOGIN_USER_SUCCESS:
        return {
            login_loading: false,
            login_list: action.payload,
            login_error: ''
        }
      case LOGIN_USER_FAILURE:
        return {
            login_loading: false,
            login_list: [],
            login_error: action.payload
        }
      default: return state
    }
  }
  
  export default loginReducer;