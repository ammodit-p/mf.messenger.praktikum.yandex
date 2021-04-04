

import Fetch from '../../classes/classFetch'


const api = new Fetch()

class LoginApi {
    constructor() {

    }

    getUserInfo() {
        return api.get('/auth/user', {headers: {'content-type': 'application/json'}},)
    }

    signin(data: string) {
        return api.post('/auth/signin', {data: data, headers: {'content-type': 'application/json'}},)
    }
}

const login_api = new LoginApi()

export default login_api
