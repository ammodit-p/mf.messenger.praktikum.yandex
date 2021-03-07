import {Controller} from "../../classes/classController"
import chat_api from "./chat_api";
import chat_list_controller from './chat_list/chat_list_controller'

class ChatsController extends Controller {
    constructor() {
        super()
    }

    async post(data?: any) {
        const name = "post";
        const res = await chat_api.post(data)
        this.handle(res, name)
    }

    async delete (data?: any) {
        const name = "delete"
        const res = await chat_api.delete(data)
        this.handle(res, name)
    }


    handle(res: any, name: string) {
        if (name === "post") {
            if(res.status === 200) {
				chat_list_controller.get()
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

        if (name === "delete") {
            if(res.status === 200) {
                chat_list_controller.get()
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



const chat_controller = new ChatsController();

export default chat_controller
