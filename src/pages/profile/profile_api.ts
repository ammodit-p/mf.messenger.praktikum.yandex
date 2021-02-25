
import{Fetch} from "../../classes/classFetch.js"


const api = new Fetch()

class ProfileApi {
    constructor() {

    }

    get() {
        return api.get('/auth/user', {headers: {}},)
    }
}

const profile_api = new ProfileApi()

export default profile_api
