import {Controller} from "../../classes/classController"
import chat_api from "./chat_api";
import chat_list_controller from './chat_list/chat_list_controller';
import chat_body_controller from './chat_body/chat_body_controller';
import {chat_view} from './chat_body/chat_body_view/chat_body_view';
import {message_instance} from './chat_body/message_instance/message_instance';

class ChatsController extends Controller {
    constructor() {
        super()
	}

	renderMessages(data: any): void {
		if (Array.isArray(data)) {
			data.forEach((key) => {
				this.set('chat_body_messages_item', key);
				const el = chat_view.element;
				el.appendChild(message_instance.getContent())
			})
		}
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

	async getToken () {
		const props: any = this.get('chat_body');
		const id = props.id;
		const url = '/chats/token/' + id;
		const res = await chat_api.getToken(url);
		this.handle(res, 'getToken');
	}


    handle(res: any, name: string) {
        if (name === "post") {
            if(res.status === 200) {
				chat_list_controller.getchats()
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
                chat_list_controller.getchats()
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

		if (name === "getToken") {
            if(res.status === 200) {
				this.set('token', res.response)
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

	propsToBody(id: string):void {
		const {list} = chat_list_controller.get('chatlist_area')
		let props = {}
		for (let key of list) {
			if (key.id === (+id)) {
				props = key
			}
		}

		chat_body_controller.set('chat_body', JSON.stringify(props))
	}

}



const chat_controller = new ChatsController();

export default chat_controller
