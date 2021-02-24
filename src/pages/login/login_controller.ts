import {Controller} from "../../classes/classController.js"
import login_api from "./login_api.js";

class LoginController extends Controller {
    constructor() {
        super()
    }

    async send (data?: any) {
        const name = "signin";
        const res = await login_api.signin(data)
        this.handle(res, name)
    }

    async get (data?: any) {
        const name = "getUserInfo"
        const res = await login_api.getUserInfo(data)
        this.handle(res, name)
    }


    handle(res: any, name: string) {
        if (name === "signin") {
            if(res.status === 200) {
                this.get()
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
                this.set('profile', res.response)
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