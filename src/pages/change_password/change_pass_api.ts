
import {Fetch} from '../../classes/classFetch'


const api = new Fetch()

class ChangePassApi {
    constructor() {

    }

    get() {
        return api.get('/auth/user', {headers: {}},)
    }

    put(data: any) {
        return api.put('/user/password', {data: data, headers: {'content-type': 'application/json'}},)
    }
}

export const change_pass_api = new ChangePassApi()

