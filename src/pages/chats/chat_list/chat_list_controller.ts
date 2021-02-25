import {Controller} from "../../../classes/classController.js";
import chat_list_api from "./chat_list_api.js";

class ChatListController extends Controller {
    constructor() {
        super()
    }

    async get () {
        const name = "signup";
        const res = await chat_list_api.getchats()
        this.handle(res, name)
    }



    handle(res: any, name: string) {
        if (name === "signup") {
            if(res.status === 200) {
                if(res.responseType === 'json') {
                    const val = JSON.parse(res.response)
                    this.set('chats.data.list', val)
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



const chat_list_controller = new ChatListController();

export default chat_list_controller;