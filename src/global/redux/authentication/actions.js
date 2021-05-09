import {
    STORE_USER,
    USER_SIGNED_OUT,
    USER_EXPIRED,
    STORE_USER_ERROR,
    LOADING_USER,
    EXPIRING_TOKEN,
    EXPIRED_TOKEN,
    USER_STATUS,
    STORE_USER_INFO
  } from './types'
  import { setAuthHeader } from '../../../utils/axiosHeaders'
  
  export function storeUser(user) {
    setAuthHeader(user.access_token)
    return {
      type: STORE_USER,
      payload: user
    }
  }
  
  export function setUserInfo(user) {
    return {
      type: STORE_USER_INFO,
      payload: user
    }
  }
  
  /*export async function setUserData(user) {
    const userDetails = jwt(user.access_token)
      await api.getUser(userDetails["omnify.user"])
        .then(res => {
          console.warn(res.data)
          return {
            type: STORE_USER_INFO,
            userData: res.data
          }
        })
        .catch(err => { 
          console.log(err)
        })
   
  }*/
  
  export function loadingUser() {
    return {
      type: LOADING_USER
    }
  }
  
  export function expiringToken() {
    return {
      type: EXPIRING_TOKEN
    }
  }
  
  export function expiredToken() {
    return {
      type: EXPIRED_TOKEN
    }
  }
  
  export function storeUserError() {
    return {
      type: STORE_USER_ERROR
    }
  }
  
  export function userExpired() {
    return {
      type: USER_EXPIRED
    }
  }
  
  export function userSignedOut() {
    return {
      type: USER_SIGNED_OUT
    }
  }
  
  export function changeUserStatus(pause) {
    return {
      type: USER_STATUS,
      pause
    }
  }
  
  