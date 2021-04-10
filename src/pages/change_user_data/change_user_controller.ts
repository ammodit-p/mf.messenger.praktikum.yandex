import {Controller} from '../../classes/classController';
import {change_user_api} from './change_user_api';

class ChangeUserController extends Controller {
    constructor() {
        super()
    }

    async getuser (): Promise<void> {
        const res = await change_user_api.getUser().catch((e) => {console.log(e)})
		if (res) {
			if (res.status !== 200) {
				this.handle(res)
			}
			this.set('profile', res.response)
			this.set('user_form', res.response)
		}
    }

    async changeuser (formData: FormData): Promise<void> {
		const data: string = JSON.stringify(this.formDataToObj(formData));
        const res = await change_user_api.changeUser(data).catch((e) => {console.log(e)})
		if (res) {
			if (res.status !== 200) {
				this.handle(res)
			}
			this.set('profile', res.response)
			this.go('/profile')
		}
    }

}

export const change_user_controller = new ChangeUserController();
