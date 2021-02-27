
import Fetch from "../../classes/classFetch"


const api = new Fetch()

class ProfileApi {
    constructor() {

    }

    get() {
        return api.get('/auth/user', {headers: {}},)
    }

    post() {
        return api.post('/auth/logout', {headers: {}})
    }
}

const profile_api = new ProfileApi()

export default profile_api
