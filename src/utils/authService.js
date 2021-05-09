import { storeUserError, storeUser } from '../global/redux/authentication/actions'
import status from './userStatus'

const userManager = 'testing'

export async function loadUserFromStorage(store) {
  /*try {
    let user = await userManager.getUser()
    if (!user) { return store.dispatch(storeUserError()) }
      store.dispatch(storeUser(user))
      console.log(user)
  } catch (e) {
    console.error(`User not found: ${e}`)
    store.dispatch(storeUserError())
  }*/
  console.log('loadUserFromStorage')
  return 'loadUserFromStorage'
}

export function signinRedirect() {
  //return userManager.signinRedirect()
  console.log('signinRedirect')
  return 'signinRedirect'
}

export function signinRedirectCallback() {
  /*api.userLogon()
    .then(res => {
      alert(JSON.stringify(res))
    })
    .catch(err => { alert(JSON.stringify(err)) })*/
  return 'signinRedirectCallback'
}

export function signinPopUp() {
  /*return userManager.signinPopup().then(res => {
    console.log(res)
  });*/
  return 'signinRedirectCallback'
}

export function silentRefresh() {
  //processSilentRenew()
  /*userManager.signinSilentCallback()
  .catch((err) => {
      console.log(err);
  });*/
  return 'silentRefresh'
}


export async function signoutRedirect() {
  /*let user = await userManager.getUser()
    const logout = status.logout().then( res => {
      localStorage.removeItem('pauseId')
      localStorage.removeItem('userInfo')
      return userManager.signoutRedirect({ 'id_token_hint': user.id_token });
    }).catch(err => {
      console.log(err)
    })*/
    
    //

    return 'signoutRedirect'


}

export function signoutRedirectCallback() {
  /*userManager.clearStaleState()
  userManager.removeUser()
  console.log('redirect_callback')
  localStorage.removeItem('userInfo')
  
  return userManager.signoutRedirectCallback()*/

  return 'signoutRedirectCallback'
  
  
}

export default userManager