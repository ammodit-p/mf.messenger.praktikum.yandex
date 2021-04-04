import {Controller} from '../../classes/classController'
import login_api from './login_api';

class LoginController extends Controller {
    constructor() {
        super()
    }

    async login (formData: FormData) {
		const data = JSON.stringify(this.formDataToObj(formData));
        const res = await login_api.signin(data)
		if (res.status !== 200) {
			this.handle(res);
			return;
		}
		this.go('/chat');
    }

    async getuser () {
        const res = await login_api.getUserInfo()
		if (res.status !== 200) {
			this.handle(res);
			return;
		}
		this.set('profile', res.response)
		this.go('/chat')
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



const login_controller = new LoginController();

export default login_controller
