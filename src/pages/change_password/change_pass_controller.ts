import {Controller} from '../../classes/classController';
import change_pass_api from './change_pass_api';

class ChangePassController extends Controller {
    constructor() {
        super()
    }

    async getuser(): Promise<void> {
		const res = await change_pass_api.get().catch((e) => {console.log(e)})
		if (res) {
			if (res.status !== 200) {
				this.handle(res)
			}
			this.set('profile', res.response);
		}
    }

    async changepass(formData: FormData): Promise<void> {
		const data: string = JSON.stringify(this.formDataToObj(formData))
        const res = await change_pass_api.put(data).catch((e) => {console.log(e)})
		if (res) {
			if (res.status !== 200) {
				this.handle(res)
			}
			this.go('/profile')
		}
    }
}



const change_pass_controller = new ChangePassController();

export default change_pass_controller;
