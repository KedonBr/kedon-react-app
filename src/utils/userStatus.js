//import api from '../services/apps/settings/users'

const status =  {
    logon: () => {
        /*return new Promise((resolve, reject) => {
            return api.userLogon()
                .then(res => resolve(true))
                .catch(error=> reject(false))
        })*/
        return true
    },
    logout: () => {
        /*return new Promise((resolve, reject) => {
            return api.userLogout()
                .then(res => resolve(true))
                .catch(error=> reject(false))
        })*/
        return false
    },
    pause: (param) => {
        /*return new Promise((resolve, reject) => {
            return api.userPause(param)
                .then(res => resolve(res))
                .catch(error=> reject(false))
        })*/
        return false
    },
}

export default status