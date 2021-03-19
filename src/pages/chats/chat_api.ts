import Fetch from "../../classes/classFetch"

const api = new Fetch()

class ChatApi {
    constructor() {

    }

    post(data: any) {
        return api.post('/chats', {data: data, headers: {'content-type': 'applicationon'}});
    }

    delete(data: any) {
        return api.delete('/chats', {data: data, headers: {'content-type': 'applicationon'}});
	}

	getToken(url: string) {
		return api.post(url, {data: {}, headers: {'content-type': 'applicationon'}});
	}

	getUserInfo(data: any) {
        return api.get('/auth/user', {data: data, headers: {'content-type': 'application/json'}},)
    }
}

const chat_api = new ChatApi()

export default chat_api
