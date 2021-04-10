import {Controller} from '../../classes/classController';
import {chat_api} from './chat_api';
import {MessageInstance} from './chat_body/message_instance/message_instance';


class ChatsController extends Controller {
	websocket: WebSocket;
	chatId: number | string;
	userId: number | string;
	socketUrl: string;
	token: string;
    constructor() {
		super()
		this.socketUrl = 'wss://ya-praktikum.tech/ws/chats/';
	}

	propsToBody(id: string):void {
		const {list} = chat_controller.get('chatlist_area')
		let props = {}
		for (let key of list) {
			if (key.id === (+id)) {
				props = key
			}
		}
		this.set('chat_body', JSON.stringify(props))
	}

    async createChat(formData: FormData): Promise<void> {
		const data = this.formDataToObj(formData)
        const res = await chat_api.createChat(JSON.stringify(data)).catch((e) => {console.log(e)})
		if (res) {
			if (res.status !== 200) {
				this.handle(res);
				return;
			}
			this.getchats()
		}
    }

    async deleteChat(): Promise<void> {
		const data = JSON.stringify({chatId: this.chatId})
        const res = await chat_api.deleteChat(data).catch((e) => {console.log(e)})
		if (res) {
			if (res.status !== 200) {
				this.handle(res);
				return;
			}
			this.getchats()
		}
	}

	async addUser(formData: FormData): Promise<void> {
		const data = JSON.stringify(this.formDataToObj(formData))
		const user = await chat_api.searchUser(data).catch((e) => {console.log(e)});

		if (user) {
			if (user.status !== 200) {
				this.handle(user);
			}

			const userId = JSON.parse(user.response)[0].id
			const userData = JSON.stringify({users: [userId], chatId: this.chatId})
			const res = await chat_api.addUser(userData).catch((e) => {console.log(e)})
			if (res) {
				if (res.status !== 200) {
					this.handle(res);
					return;
				}
			}
		}
}

	async deleteUser(formData: FormData): Promise<void> {
		const data = JSON.stringify(this.formDataToObj(formData))
		const user = await chat_api.searchUser(data).catch((e) => {console.log(e)});

		if (user) {
			if (user.status !== 200) {
				this.handle(user);
			}
			const userId = JSON.parse(user.response)[0].id
			const userData = JSON.stringify({users: [userId], chatId: this.chatId})
			const res = await chat_api.deleteUser(userData).catch((e) => {console.log(e)})
			if (res) {
				if (res.status !== 200) {
					this.handle(res);
					return;
				}
			}
		}
	}

	async getToken(): Promise<void> {
		const props: any = this.get('chat_body');
		this.chatId = props.id;
		const url = '/chats/token/' + this.chatId;
		const res = await chat_api.getToken(url).catch((e) => {console.log(e)});
		if (res) {
			if (res.status !== 200) {
				this.handle(res)
			}
			this.token = JSON.parse(res.response).token;
			this._createSocket();
		}
	}

	async getUser(data?: any): Promise<void> {
        const res = await chat_api.getUserInfo(data).catch((e) => {console.log(e)})
		if (res) {
			if (res.status !== 200) {
				this.handle(res)
			}
			this.set('profile', res.response)
			this.go('/chat')
		}
	}

	async getchats (formData?: FormData): Promise<void> {
		let data: {[k in string]: any} = {};
		if (formData) {
			data = this.formDataToObj(formData)
		}
		const res = await chat_api.getchats(data).catch((e) => {console.log(e)});
		if (res) {
			if (res.status !== 200) {
				this.handle(res);
				return;
			}
			this.set('chatlist_area', {list: JSON.parse(res.response)});
		}
	}

	async changeChatAvatar(formData: FormData): Promise<void> {
		formData.append('chatId', String(this.chatId))
		const res = await chat_api.changeChatAvatar(formData).catch((e) => {console.log(e)});
		if (res) {
			if (res.status !== 200) {
				this.handle(res);
				return;
			}
			this.set('chat_body', res.response)
			this.set('chatlist_area', res.response)
		}
	}

	_makeUrlForSocket(): string {
		this._getUserId();
		const url = `${this.socketUrl}${this.userId}/${this.chatId}/${this.token}`;
		return url
	}
	_getUserId(): void {
		const data: any = this.get('profile');
		this.userId = data.id;
	}

	_createSocket(): void {
		const url = this._makeUrlForSocket();
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

	closeSocket(): void {
		this.websocket.addEventListener('close', event => {
			if (event.wasClean) {
				console.log('Соединение закрыто чисто');
			} else {
				console.log('Обрыв соединения');
			}

			console.log(`Код: ${event.code} | Причина: ${event.reason}`);
		});
	}

	sendMessage(formData: FormData): void {
		const data = this.formDataToObj(formData);
		this.websocket.send(JSON.stringify({
            content: `${data.message}`,
			type: 'message',
		}));
	}

	renderMessages(data: any): void {

		try{
			const content: any = JSON.parse(data)
			if(!Array.isArray(content)) {
				this.set('chat_body_messages_item', content);
				const el: any = document.querySelector('.chat_body_messages');
				const props = {
					type: content.type,
					position: '',
					content: content.content
				}
				content.user_id === this.userId ? props.position = 'right_message' : props.position = 'left_message'
				const message_instance = new MessageInstance(props)
				el.appendChild(message_instance.getContent())
			}

			if (Array.isArray(content)) {
				content.forEach((key) => {
					this.set('chat_body_messages_item', key);
					const el: any = document.querySelector('.chat_body_messages');
					const props = {
						type: key.type,
						position: '',
						content: key.content
					}
					key.user_id === this.userId ? props.position = 'right_message' : props.position = 'left_message'
					const message_instance = new MessageInstance(props)
					el.appendChild(message_instance.getContent())
				})
			}
		} catch(e){console.log(e)}

	}
}



export const chat_controller = new ChatsController();
