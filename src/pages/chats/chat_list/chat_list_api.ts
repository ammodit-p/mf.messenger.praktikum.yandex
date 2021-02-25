import{Fetch} from "../../../classes/classFetch.js"


const api = new Fetch()

class ChatListApi {
    constructor() {

    }

    getchats() {
        return api.get('/chats', {headers: {"content-type": "application/json"}},)
    }
}

const chat_list_api = new ChatListApi()

export default chat_list_api
