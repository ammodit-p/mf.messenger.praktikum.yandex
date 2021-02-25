
import{Fetch} from "../../classes/classFetch.js"


const api = new Fetch()

class ChangeUserApi {
    constructor() {

    }

    get() {
        return api.get('/auth/user', {headers: {}},)
    }

    put(data: any) {
        return api.put('/user/profile', {data: data, headers: {'content-type': 'application/json'}},)
    }
}

const change_user_api = new ChangeUserApi()

export default change_user_api