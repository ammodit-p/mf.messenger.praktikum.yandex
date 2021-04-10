import {Controller} from '../../classes/classController'
import {signin_api} from './signin_api';

class SigninController extends Controller {
    constructor() {
        super()
    }

    async signup (formData: FormData) {
		const data = JSON.stringify(this.formDataToObj(formData));
        const res = await signin_api.signup(data).catch((e) => {console.log(e)});
		if (res) {
			if (res.status !== 200) {
				this.handle(res)
			}
			this.set('profile', data)
			this.go('/chat')
		}
    }

	handle(res: XMLHttpRequest): void {
		switch (res.status) {
			case 401:
				if (res.response == '{"reason":"Cookie is not valid"}') {
					return
				}
				alert('Неверный логин/пароль');
				break;

			case 400:
				alert('Что-то пошло не так');
				console.log(res.response);
				break;

			case 500:
				this.go('/500');
				break;
		}
	}
}



export const signin_controller = new SigninController();

