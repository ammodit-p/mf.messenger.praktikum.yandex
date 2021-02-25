import {Fetch} from "../../classes/classFetch.js"

const api = new Fetch()

class ChatApi {
    constructor() {

    }

    post(data: any) {
        return api.post('/chats', {data: data, headers: {'content-type': 'application/json'}},)
    }

    delete(data: any) {
        return api.delete('/chats', {data: data, headers: {'content-type': 'application/json'}},)
    }
}

const chat_api = new ChatApi()

export default chat_api
