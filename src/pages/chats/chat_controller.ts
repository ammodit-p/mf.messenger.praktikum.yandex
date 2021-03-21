import {Controller} from "../../classes/classController"
import chat_api from "./chat_api";
import chat_list_controller from './chat_list/chat_list_controller';
import chat_body_controller from './chat_body/chat_body_controller';
import {chat_view} from './chat_body/chat_body_view/chat_body_view';
import {MessageInstance} from './chat_body/message_instance/message_instance';
import {message_instance_tmpl} from './chat_body/message_instance/message_instance_tmpl';


class ChatsController extends Controller {
	websocket: WebSocket;
	chatId: number | string;
	userId: number | string;
	socketUrl: string;
	token: string;
    constructor() {
		super()
		this.websocket;
		this.userId;
		this.chatId;
		this.socketUrl = 'wss://ya-praktikum.tech/ws/chats/';
	}

    async createChat(data: any) {
        const name = "post";
        const res = await chat_api.createChat(data)
        this.handle(res, name)
    }

    async delete (data?: any) {
        const name = "delete"
        const res = await chat_api.delete(data)
        this.handle(res, name)
	}

	async getToken() {
		const props: any = this.get('chat_body');
		this.chatId = props.id;
		const url = '/chats/token/' + this.chatId;
		const res = await chat_api.getToken(url);
		this.token = JSON.parse(res.response).token;
		this._createSocket();
	}

	async getUser(data?: any) {
		const name = "getUserInfo"
        const res = await chat_api.getUserInfo(data)
        this.handle(res, name)
	}

	_makeUrlForSocket(): string {
		this._getUserId();
		const url = `${this.socketUrl}${this.userId}/${this.chatId}/${this.token}`;
		return url
	}
	_getUserId() {
		const data: any = this.get('profile');
		this.userId = data.id;
	}

	_createSocket() {
		const url = this._makeUrlForSocket()
		this.websocket = new WebSocket(url);
		this.websocket.addEventListener('open', () => {
			console.log('Соединение установлено');
			this.websocket.send(JSON.stringify({
				content: '0',
				type: 'get old'
			}));
		})

		this.websocket.addEventListener('message', event => {
			this.renderMessages(event.data)
		});

		this.websocket.addEventListener('error', (event: any) => {
			console.log('Ошибка', event.message);
		});
	}

	closeSocket() {
		this.websocket.addEventListener('close', event => {
			if (event.wasClean) {
				console.log('Соединение закрыто чисто');
			} else {
				console.log('Обрыв соединения');
			}

			console.log(`Код: ${event.code} | Причина: ${event.reason}`);
		});
	}

	sendMessage(message: string) {
		const send = JSON.stringify({
            content: `${message}`,
			type: 'message',
		})
		this.websocket.send(send);
	}

	renderMessages(data: any): void {

		try{
			const content: any = JSON.parse(data)
			if(!Array.isArray(content)) {
				this.set('chat_body_messages_item', content);
				const el = chat_view.element;
				const props = {
					type: content.type,
					position: '',
					content: content.content
				}
				content.userId === this.userId ? props.position = 'right_message' : props.position = 'left_message'
				const message_instance = new MessageInstance('div', {data: props}, message_instance_tmpl, 'chat_body_messages_item')
				el.appendChild(message_instance.getContent())
			}

			if (Array.isArray(content)) {
				content.forEach((key) => {
					this.set('chat_body_messages_item', key);
					const el = chat_view.element;
					const props = {
						type: key.type,
						position: '',
						content: key.content
					}
					key.user_id === this.userId ? props.position = 'right_message' : props.position = 'left_message'
					const message_instance = new MessageInstance('div', {data: props}, message_instance_tmpl, 'chat_body_messages_item')
					el.appendChild(message_instance.getContent())
				})
			}
		} catch(e){console.log(e)}

	}


    handle(res: any, name: string) {
		if (name === "getUserInfo") {
            if(res.status === 200) {
				this.set('profile', res.response)
				this.go('/chat')
            }
            if(res.status === 401) {
                return
            }
            if(res.status === 400) {
                alert("Что-то пошло не так")
                    console.log(res.response)
            }
            if(res.status === 500) {
                this.go('/500')
            }
		}

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
