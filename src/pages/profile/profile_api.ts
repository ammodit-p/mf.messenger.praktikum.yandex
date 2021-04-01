
import Fetch from '../../classes/classFetch';


const api = new Fetch()

class ProfileApi {

    getUser() {
        return api.get('/auth/user', {headers: {'content-type': 'application/json'}},)
    }

    logout() {
        return api.post('/auth/logout', {headers: {'content-type': 'application/json'}})
	}

	changeAvatar(formData: FormData) {
		return api.put('/user/profile/avatar', {data: formData})
	}

	getAvatar(path: string) {
		return api.post(`/resources${path}`, {headers: {'content-type': 'application/json'}})
	}
}

const profile_api = new ProfileApi()

export default profile_api
