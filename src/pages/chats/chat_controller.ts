import {Controller} from "../../classes/classController"
import chat_api from "./chat_api";

class ChatsController extends Controller {
    constructor() {
        super()
    }

    async post(data?: any) {
        const name = "post";
        const res = await chat_api.post(data)
        this.handle(res, name, data)
    }

    async delete (data?: any) {
        const name = "delete"
        const res = await chat_api.delete(data)
        this.handle(res, name)
    }


    handle(res: any, name: string, data?: any) {
        if (name === "post") {
            if(res.status === 200) {
                const val = JSON.parse(res.response)
                const list = this.get('chats.data.list')
                list.push(Object.assign({}, val, data))
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
                this.set('profile.data', res.response)
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
