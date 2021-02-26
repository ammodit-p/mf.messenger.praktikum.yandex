import{Fetch} from "../../../classes/classFetch"


const api = new Fetch()

class ChatListApi {
    constructor() {

    }

    getchats() {
        return api.get('/chats', {headers: {"content-type": "applicationon"}},)
    }
}

const chat_list_api = new ChatListApi()

export default chat_list_api
