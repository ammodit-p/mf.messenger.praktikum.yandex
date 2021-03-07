import {Controller} from "../../../classes/classController";
import chat_list_api from "./chat_list_api";
import {Indexed} from '../../../types'

class ChatListController extends Controller {
    constructor() {
        super()
	}

	_parse(value: string): Indexed {
		const data: Indexed = {list: JSON.parse(value)}
		return data
	}

    async get () {
        const name = "chatlist";
        const res = await chat_list_api.getchats()
        this.handle(res, name)
    }



    handle(res: any, name: string) {
        if (name === "chatlist") {
            if(res.status === 200) {
				this.set('chatlist_area', res.response)
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
