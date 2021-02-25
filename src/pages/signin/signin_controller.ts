import {Controller} from "../../classes/classController.js"
import signin_api from "./signin_api.js";

class LoginController extends Controller {
    constructor() {
        super()
    }

    async send (data?: any) {
        const name = "signup";
        const res = await signin_api.signup(data)
        this.handle(res, name, data)
    }



    handle(res: any, name: string, data: any) {
        if (name === "signup") {
            if(res.status === 200) {
                if(res.responseType === 'json') {
                    const val = JSON.parse(data)
                    this.set('profile.data', val)
                }
            }
            if(res.status === 401) {
                alert('Неверный логин/пароль')
            }
            if(res.status === 400) {
                alert("Что-то пошло не так")
                    console.log(res.response)
            }
            if(res.status === 500) {
                this.go('/500')
            }
        }

        if (name === "getUserInfo") {
            if(res.status === 200) {
                if(res.responseType === 'json') {
                    this.set('profile.data', res.response)
                }
            }
            if(res.status === 401) {
                this.go('/')
            }
            if(res.status === 400) {
                alert("Что-то пошло не так")
                    console.log(res.response)
            }
            if(res.status === 500) {
                this.go('/500')
            }
        }
    }
            
}



const login_controller = new LoginController();

export default login_controller