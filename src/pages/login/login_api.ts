

import{Fetch} from "../../classes/classFetch.js"


const api = new Fetch()

class LoginApi {
    constructor() {

    }

    getUserInfo(data: any) {
        return api.get('/auth/user', {data: data, headers: {'content-type': 'application/json', 'withCredentials': true}},)
    }

    signin(data: any) {
        return api.post('/auth/signin', {data: data, headers: {'content-type': 'application/json', 'withCredentials': true}},)
    }
}

const login_api = new LoginApi()

export default login_api
