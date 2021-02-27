

import Fetch from "../../classes/classFetch"


const api = new Fetch()

class LoginApi {
    constructor() {

    }

    getUserInfo(data: any) {
        return api.get('/auth/user', {data: data, headers: {'content-type': 'applicationon'}},)
    }

    signin(data: any) {
        return api.post('/auth/signin', {data: data, headers: {'content-type': 'applicationon'}},)
    }
}

const login_api = new LoginApi()

export default login_api
