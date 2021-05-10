import { client } from '../../../utils/axiosUtils'

/*if (!domain) {
    throw new Error('Server url not present. Contact the adminstrator!')
}*/
const api =  {
    chatSendMessage: (message) => {
        return new Promise((resolve, reject) => {
            return  client()
            .post(`${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_URI}/messages/send`, message)
            .then(res => resolve(res.data))
            .catch(error=> reject(error))
        })
    },
    chatResendMessage: (id) => {
        return new Promise((resolve, reject) => {
            return  client()
            .post(`${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_URI}/messages/resend`, id)
            .then(res => resolve(res.data))
            .catch(error=> reject(error))
        })
    },
    ChatContacts: (params) => {
        return new Promise((resolve, reject) => {
            return  client()
            .get(`${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_URI}/customers`, {params})
            .then(res => resolve(res.data))
            .catch(error=> reject(error))
        })
    },
    loggeduser: () => {
        return new Promise((resolve, reject) => {
            return  client()
            .get(`${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_URI}/messages/loggeduser`)
            .then(res => resolve(res.data))
            .catch(error=> reject(error))
        })
    },
    getUserChats: (customerId,params) => {
        return new Promise((resolve, reject) => {
            return  client()
            .get(`${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_URI}/messages/customer/${customerId}`, {params})
            .then(res => resolve(res.data))
            .catch(error=> reject(error))
        })
    },
    getGroupChats: (groupId, params) => {
        return new Promise((resolve, reject) => {
            return  client()
            .get(`${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_URI}/messages/group/${groupId}`, {params})
            .then(res => resolve(res.data))
            .catch(error=> reject(error))
        })
    },
    isSpecial: (params) => {
        return new Promise((resolve, reject) => {
            return  client()
            .patch(`${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_URI}/serviceactions/important-customer`, params )
            .then(res => resolve(res.data))
            .catch(error=> reject(error))
        })
    },
    checkScript: (params) => {
        return new Promise((resolve, reject) => {
            return  client()
            .post(`${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_URI}/serviceactions/check-script`, params)
            .then(res => resolve(res.data))
            .catch(error=> reject(error))
        })
    },
    setConversationImportant: (params) => {
        return new Promise((resolve, reject) => {
            return  client()
            .patch(`${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_URI}/serviceactions/conversation-important`, params)
            .then(res => resolve(res.data))
            .catch(error=> reject(error))
        })
    },
    setConversationFreeze: (params) => {
        return new Promise((resolve, reject) => {
            return  client()
            .patch(`${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_URI}/serviceactions/freeze`, params)
            .then(res => resolve(res.data))
            .catch(error=> reject(error))
        })
    },
    forwardChat: (params) => {
        return new Promise((resolve, reject) => {
            return  client()
            .post(`${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_URI}/serviceactions/transfer`, params)
            .then(res => resolve(res.data))
            .catch(error=> reject(error))
        })
    },
    readMessages: (customerId) => {
        return new Promise((resolve, reject) => {
            return  client()
            .post(`${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_URI}/messages/read-messages`, customerId)
            .then(res => resolve(res.data))
            .catch(error=> reject(error))
        })
    },
    readMessagesGroup: (groupWhatsId) => {
        return new Promise((resolve, reject) => {
            return  client()
            .post(`${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_URI}/messages/read-messages-group`, groupWhatsId)
            .then(res => resolve(res.data))
            .catch(error=> reject(error))
        })
    },
    getCheckedScripts: (serviceProtocolId) => {
        return new Promise((resolve, reject) => {
            return  client()
            .get(`${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_URI}/serviceactions/script/service-protocol/${serviceProtocolId}`)
            .then(res => resolve(res.data))
            .catch(error=> reject(error))
        })
    },
    transferList: (groupId,customerId) => {
        return new Promise((resolve, reject) => {
            return  client()
            .get(`${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_URI}/users/agents/${customerId ? `transfer/customer/${customerId}` : `group/${groupId}`}`)
            .then(res => resolve(res.data))
            .catch(error=> reject(error))
        })
    },
    closeProtocol: (protocolId) => {
        return new Promise((resolve, reject) => {
            return  client()
            .post(`${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_URI}/serviceactions/close-protocol`, {protocolId: protocolId.serviceProtocolId})
            .then(res => resolve(res.data))
            .catch(error=> reject(error))
        })
    },
    attachmentssettings: (groupId) => {
        return new Promise((resolve, reject) => {
            return  client()
            .get(`${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_URI}/attachmentssettings/all`)
            .then(res => resolve(res.data))
            .catch(error=> reject(error))
        })
    },
    mention: (id) => {
        return new Promise((resolve, reject) => {
            return  client()
            .get(`${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_URI}/messages/mention/${id}`)
            .then(res => resolve(res.data))
            .catch(error=> reject(error))
        })
    },
    requestCall: (params) => {
        return new Promise((resolve, reject) => {
            return  client()
            .post(`${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_URI}/webhooksendevent/request-call`, params)
            .then(res => resolve(res.data))
            .catch(error=> reject(error))
        })
    },
    messagesDelete: (id) => {
        return new Promise((resolve, reject) => {
            return  client()
            .post(`${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_URI}/messages/delete`, id)
            .then(res => resolve(res.data))
            .catch(error=> reject(error))
        })
    },
    fetchBroadcastLists: () => {
        return new Promise((resolve, reject) => {
            return  client()
            .get(`${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_URI}/broadcastlist`)
            .then(res => resolve(res.data))
            .catch(error=> reject(error))
        })
    },
    fetchBroadcastChannels: () => {
        return new Promise((resolve, reject) => {
            return  client()
            .get(`${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_URI}/servicechannel/broadcast-list`)
            .then(res => resolve(res.data))
            .catch(error=> reject(error))
        })
    },
    saveBroadcastList: (params) => {
        return new Promise((resolve, reject) => {
            return  client()
            .post(`${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_URI}/broadcastlist`, params)
            .then(res => resolve(res.data))
            .catch(error=> reject(error))
        })

    },
    updateBroadcastList: (params) => {
        return new Promise((resolve, reject) => {
            return  client()
            .put(`${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_URI}/broadcastlist`, params)
            .then(res => resolve(res.data))
            .catch(error=> reject(error))
        })

    },
    changeBroadcastListStatus: (params) => {
        return new Promise((resolve, reject) => {
            return  client()
            .patch(`${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_URI}/broadcastlist/status`, params)
            .then(res => resolve(res.data))
            .catch(error=> reject(error))
        })
    },
    sendBroadcastMessage: (params) => {
        return new Promise((resolve, reject) => {
            return  client()
            .post(`${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_URI}/messagebroadcastlist/send`, params)
            .then(res => resolve(res.data))
            .catch(error=> reject(error))
        })

    },
    fetchBroadcastMessages: (id) => {
        return new Promise((resolve, reject) => {
            return  client()
            .get(`${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_URI}/messagebroadcastlist/broadcastlist/${id}`)
            .then(res => resolve(res.data))
            .catch(error=> reject(error))
        })
    },
    fetchBroadcastServiceChannelMessages: (id) => {
        return new Promise((resolve, reject) => {
            return  client()
            .get(`${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_URI}/messagebroadcastlist/servicechannelid/${id}`)
            .then(res => resolve(res.data))
            .catch(error=> reject(error))
        })
    },
}

export default  api;    