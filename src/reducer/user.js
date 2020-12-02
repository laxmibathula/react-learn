import {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE} from '../constants/user';
  
 export const initialState = {
    user_loading: false,
    user_list: [],
    user_error: '',
    login_loading: false,
    login_list: [],
    login_error: ''
  }
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USERS_REQUEST:
        return {
          ...state,
          user_loading: true
        }
      case FETCH_USERS_SUCCESS:
        return {
          user_loading: false,
          user_list: action.payload,
          user_error: ''
        }
      case FETCH_USERS_FAILURE:
        return {
          user_loading: false,
          user_list: [],
          user_error: action.payload
        }
      default: return state
    }
  }
  
  export default userReducer;