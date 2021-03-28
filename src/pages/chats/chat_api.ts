import Fetch from '../../classes/classFetch'

const api = new Fetch()

class ChatApi {
    constructor() {

    }

    createChat(data: any) {
        return api.post('/chats', {data: data, headers: {'content-type': 'application/json'}});
    }

    delete(data: any) {
        return api.delete('/chats', {data: data, headers: {'content-type': 'application/json'}});
	}

	getToken(url: string) {
		return api.post(url, {headers: {'content-type': 'application/json'}});
	}

	getUserInfo(data: any) {
        return api.get('/auth/user', {data: data, headers: {'content-type': 'application/json'}},)
	}

	getchats() {
        return api.get('/chats', {headers: {'content-type': 'application/json'}},)
    }
}

const chat_api = new ChatApi()

export default chat_api
