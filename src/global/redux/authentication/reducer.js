import {
    USER_SIGNED_OUT,
    STORE_USER_ERROR,
    USER_EXPIRED,
    STORE_USER,
    STORE_USER_INFO,
    LOADING_USER,
    EXPIRING_TOKEN,
    EXPIRED_TOKEN,
    USER_STATUS,
    USER_DATA
  } from './types'
  
  const initialState = {
    user: null,
    isLoadingUser: false,
    userData: null
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case STORE_USER:
        console.log('Reducer STORE_USER')
        return {
          ...state,
          isLoadingUser: false,
          user: action.payload
        }
      case STORE_USER_INFO:
        return {
          ...state,
          userData: action.payload
        }
      case LOADING_USER:
        console.log('Reducer LOADING_USER')
        return {
          ...state,
          isLoadingUser: true
        }
      case USER_EXPIRED:
        console.log('Reducer USER_EXPIRED')
      case EXPIRING_TOKEN:
        console.log('Reducer EXPIRING_TOKEN')
        return {...state}
      case EXPIRED_TOKEN:
        console.log('Reducer EXPIRED_TOKEN')
        return {
          ...state,
          user: null,
          isLoadingUser: false
        }
      case STORE_USER_ERROR:
        console.log('Reducer STORE_USER_ERROR')
      case USER_SIGNED_OUT:
        console.log('Reducer USER_SIGNED_OUT')
        return {
          ...state,
          user: null,
          isLoadingUser: false
        }
        case USER_STATUS:
        console.log(JSON.stringify(state.userData))
        let userStatus = state.userData
        userStatus.pause = action.pause
        console.log(JSON.stringify(action))
        return { ...state }
      default:
        return state
    }
  }