import {Controller} from "../../classes/classController";
import profile_api from "./profile_api";

class ProfileController extends Controller {
    constructor() {
        super()
    }

    async getuser () {
        const name = "getuserinfo";
        const res = await profile_api.get()
        this.handle(res, name)
    }

    async logout () {
        const name = "logout";
        const res = await profile_api.post()
        this.handle(res, name)
    }



    handle(res: any, name: string) {
        if (name === "getuserinfo") {
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

        if (name === "logout") {
            if(res.status === 200) {
                this.go('/')
            }
            if(res.status === 500) {
                this.go('/500')
            }
        }
    }

}



const profile_controller = new ProfileController();

export default profile_controller;
