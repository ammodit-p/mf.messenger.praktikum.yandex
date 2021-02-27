
import Fetch from "../../classes/classFetch"


const api = new Fetch()

class ChangePassApi {
    constructor() {

    }

    get() {
        return api.get('/auth/user', {headers: {}},)
    }

    put(data: any) {
        return api.put('/user/password', {data: data, headers: {'content-type': 'applicationon'}},)
    }
}

const change_pass_api = new ChangePassApi()

export default change_pass_api
