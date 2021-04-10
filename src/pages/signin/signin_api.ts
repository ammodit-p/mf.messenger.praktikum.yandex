import {Fetch} from '../../classes/classFetch'


const api = new Fetch()

class SigninApi {

    signup(data: any) {
        return api.post('/auth/signup', {data: data, headers: {'content-type': 'application/json'}},)
    }
}

export const signin_api = new SigninApi()

