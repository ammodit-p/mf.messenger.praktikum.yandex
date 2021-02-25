import {Controller} from "../../classes/classController.js";
import profile_api from "./profile_api.js";

class ProfileController extends Controller {
    constructor() {
        super()
    }

    async get () {
        const name = "signup";
        const res = await profile_api.get()
        this.handle(res, name)
    }



    handle(res: any, name: string) {
        if (name === "signup") {
            if(res.status === 200) {
                if(res.responseType === 'json') {
                    const val = JSON.parse(res.response)
                    this.set('profile.data', val)
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



const profile_controller = new ProfileController();

export default profile_controller;