
import Fetch from '../../classes/classFetch'


const api = new Fetch()

class ProfileApi {
    constructor() {

    }

    get() {
        return api.get('/auth/user', {headers: {'content-type': 'application/json'}},)
    }

    post() {
        return api.post('/auth/logout', {headers: {'content-type': 'application/json'}})
    }
}

const profile_api = new ProfileApi()

export default profile_api
