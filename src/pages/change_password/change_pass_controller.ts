import {Controller} from '../../classes/classController';
import change_pass_api from './change_pass_api';

class ChangePassController extends Controller {
    constructor() {
        super()
    }

    async getuser () {
		const res = await change_pass_api.get()
		if (res.status !== 200) {
			this.handle(res)
		}
		this.set('profile', res.response);
    }

    async changepass (formData: FormData) {
		const data: string = JSON.stringify(this.formDataToObj(formData))
        const res = await change_pass_api.put(data)
		if (res.status !== 200) {
			this.handle(res)
		}
		this.go('/profile')
    }


    handle(res: XMLHttpRequest) {
		switch(res.status) {
			case 401:
				this.go('/');
				break;

			case 500:
				this.go('/500');
				break;

			case 400:
			alert('Что-то пошло не так')
			console.log(res.response);
			break;
		}
    }

}



const change_pass_controller = new ChangePassController();

export default change_pass_controller;
