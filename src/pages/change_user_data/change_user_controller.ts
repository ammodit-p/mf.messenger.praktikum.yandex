import {Controller} from "../../classes/classController";
import change_user_api from "./change_user_api";

class ChangeUserController extends Controller {
    constructor() {
        super()
    }

    async get () {
        const name = "getuser";
        const res = await change_user_api.get()
        this.handle(res, name)
    }

    async put (data: any) {
        const name = "change";
        const res = await change_user_api.put(data)
        this.handle(res, name, data)
    }



    handle(res: any, name: string, data?: any) {
        if (name === "getuser") {
            if(res.status === 200) {
                    const val = JSON.parse(data)
                    this.set('profile.data', val)
                
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

        if (name === "change") {
            if(res.status === 200) {
                if(res.responseType === 'json') {
                    const val = JSON.parse(res.response)
                    this.set('profile.data', val)
                }
                this.go('/profile')
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



const change_user_controller = new ChangeUserController();

export default change_user_controller;
