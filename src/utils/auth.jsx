
const processDataAsycn = async (info) => {  
    if(info) {  
      return info;  
    } else {  
      throw new Error('Something went wrong');  
    }  
  };  


const redirect = (role) => {

    if(role === 'administrator'){
        //history.push("/settings")
    } else if(role === 'supervisor') {
        //history.push("/monitoring")
    } else if(role === 'agent'){
        //history.push("/chat")
    } else {
        doSignIn()
    }
}

const doSignIn = () => {
    localStorage.removeItem('userInfo')
};

const doSignInPopUp = () => {
    console.log('doSignInPopUp')
};

/*const getUser = () => {
    manager.getUser().then(user => {
        if (user && !user.expired) {
            // Set the authorization header for axios
            console.log(user)
            // axios.defaults.headers.common['Authorization'] = 'Bearer ' + user.access_token;
            return user
        }
        return null
    });
};*/

const getUser = () => {
    /*const user = manager.getUser();
    if (!user) {
        //return await manager.signinRedirectCallback();
        return null
    }
    console.log(JSON.stringify(user))
    return user;*/

    /*return new Promise((resolve, reject) =>{
        try{
            const funcionarios = manager.getUser()
            resolve(funcionarios)
        }
        catch(e){
            reject(e)
        }
    })*/
    console.log('getUser')

};

const isAuthenticated = () => {
    //const oidcStorage = JSON.parse(sessionStorage.getItem(`oidc.user:${process.env.REACT_APP_AUTH_URL}:${process.env.REACT_APP_IDENTITY_CLIENT_ID}`))
    //return (!!oidcStorage && !!oidcStorage.access_token)
    return true
};

const access_token = () => {
    //const oidcStorage = JSON.parse(sessionStorage.getItem(`oidc.user:${process.env.REACT_APP_AUTH_URL}:${process.env.REACT_APP_IDENTITY_CLIENT_ID}`))
    //return (oidcStorage && oidcStorage.access_token)
    return '12358484521515'
}


const doSignOut = () => {
    /*manager.signoutPopup().then(res => {
        console.log(res)
    });*/

    /*manager.signoutRedirect().then(res => {
        localStorage.removeItem('userInfo')
    });*/
};

export {
    doSignIn,
    getUser,
    doSignOut,
    isAuthenticated,
    doSignInPopUp,
    access_token
}