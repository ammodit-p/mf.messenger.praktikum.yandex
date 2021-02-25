import{Fetch} from "../../classes/classFetch.js"


const api = new Fetch()

class SigninApi {
    constructor() {

    }

    signup(data: any) {
        return api.post('/auth/signup', {data: data, headers: {'content-type': 'application/json'}},)
    }
}

const signin_api = new SigninApi()

export default signin_api
