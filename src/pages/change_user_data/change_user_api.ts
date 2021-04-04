
import Fetch from '../../classes/classFetch'


const api = new Fetch()

class ChangeUserApi {
    constructor() {

    }

    getUser() {
        return api.get('/auth/user', {headers: {}},)
    }

    changeUser(data: string) {
        return api.put('/user/profile', {data: data, headers: {'content-type': 'application/json'}},)
    }
}

const change_user_api = new ChangeUserApi()

export default change_user_api
