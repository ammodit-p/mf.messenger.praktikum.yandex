import {Controller} from '../../classes/classController';
import profile_api from './profile_api';

class ProfileController extends Controller {
    constructor() {
        super()
    }

    async getuser () {
        const name = 'getuserinfo';
        const res = await profile_api.getUser()
        this.handle(res, name)
    }

    async logout () {
        const name = 'logout';
        const res = await profile_api.logout()
        this.handle(res, name)
	}

	async changeAvatar(formData: FormData) {
		const res = await profile_api.changeAvatar(formData);
		if (res.status === 200) {
			const avatar = await profile_api.getAvatar(JSON.parse(res.response).avatar)
			console.log(avatar)
		}
	}



    handle(res: any, name: string) {
        if (name === 'getuserinfo') {
            if(res.status === 200) {
				this.set('profile', res.response)
            }
            if(res.status === 401) {
                this.go('/')
            }
            if(res.status === 400) {
                alert('Что-то пошло не так')
                    console.log(res.response)
            }
            if(res.status === 500) {
                this.go('/500')
            }
        }

        if (name === 'logout') {
            if(res.status === 200) {
                this.go('/')
            }
            if(res.status === 500) {
                this.go('/500')
            }
        }
    }

}



const profile_controller = new ProfileController();

export default profile_controller;
