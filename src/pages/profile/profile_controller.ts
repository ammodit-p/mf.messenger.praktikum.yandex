import {Controller} from '../../classes/classController';
import profile_api from './profile_api';

class ProfileController extends Controller {
    constructor() {
        super()
    }

    async getuser () {
        const res = await profile_api.getUser().catch((e) => {console.log(e)});
		if (res) {
			if (res.status !== 200) {
				this.handle(res)
			}
			this.set('profile', res.response)
		}
    }

    async logout () {
        const res = await profile_api.logout().catch((e) => {console.log(e)});
		if (res) {
			if (res.status !== 200) {
				this.handle(res);
				return;
			}
			this.go('/');
		}

	}

	async changeAvatar(formData: FormData) {
		const res = await profile_api.changeAvatar(formData).catch((e) => {console.log(e)});
		if (res) {
			if (res.status !== 200) {
				this.handle(res);
				return;
			}
			this.set('profile', res.response)
		}
	}
}

const profile_controller = new ProfileController();

export default profile_controller;
