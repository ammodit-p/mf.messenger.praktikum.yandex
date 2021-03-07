import {Controller} from "../../classes/classController";
import change_pass_api from "./change_pass_api";

class ChangePassController extends Controller {
    constructor() {
        super()
    }

    async get () {
        const name = "getuser";
        const res = await change_pass_api.get()
        this.handle(res, name)
    }

    async put (data: any) {
        const name = "change";
        const res = await change_pass_api.put(data)
        this.handle(res, name)
    }



    handle(res: any, name: string) {
        if (name === "getuser") {
            if(res.status === 200) {
                return
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



const change_pass_controller = new ChangePassController();

export default change_pass_controller;
