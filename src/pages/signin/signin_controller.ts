import {Controller} from '../../classes/classController'
import signin_api from './signin_api';

class SigninController extends Controller {
    constructor() {
        super()
    }

    async signup (data?: any) {
        const name = 'signup';
        const res = await signin_api.signup(data)
        this.handle(res, name, data)
    }

    handle(res: any, name: string, data: any) {
        if (name === 'signup') {
            if(res.status === 200) {
				this.set('profile', data)
				this.go('/chat')
            }
            if(res.status === 401) {
                alert('Неверный логин/пароль')
            }
            if(res.status === 400) {
                alert('Что-то пошло не так')
                    console.log(res.response)
            }
            if(res.status === 500) {
                this.go('/500')
            }
        }
    }

}



const signin_controller = new SigninController();

export default signin_controller
