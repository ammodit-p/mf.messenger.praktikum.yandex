import chat_controller from './chat_controller';
import {checkForms} from '../../funcs/forms/checkForms';
import objFromForm from '../../funcs/objFromForm';
import {PopupUpload} from '../../modules/popup_upload/classPopupUpload';
import { Chat_list } from "./chat_list/chat_list";
import {Chat_body} from "./chat_body/chat_body";
import {PopupForm} from "../../modules/popup_form/classPopupForm";

export const events = {
    click: function (event:any) {
		event.preventDefault();
        if (event.target === document.querySelector('#profile')) {
            chat_controller.go('/profile');
        }

        if (event.target === document.querySelector('.add_chat')) {
			document.getElementById('add-chat')?.classList.add('show');
			document.getElementById('overlay')?.classList.add('show');
        }

        if (event.target === document.getElementById('overlay')) {
			document.querySelectorAll('.popup')?.forEach((element: HTMLElement) => {
				element.classList.remove('show');
			})
			document.getElementById('overlay')?.classList.remove('show');
		}

		if (event.target.getAttribute('data-show') === 'show-chat-window') {
			chat_controller.propsToBody(event.target.id);
			chat_controller.getToken();
			document.querySelector('.chat_body')?.classList.add('show');
		}

        if (event.target.getAttribute('data-show') === 'delete-chat') {
			chat_controller.deleteChat();
			document.querySelector('.chat_body')?.classList.remove('show');
		}

		if (event.target.getAttribute('data-show') === 'add-user') {
			document.getElementById('overlay')?.classList.add('show');
			document.getElementById('add-user')?.classList.add('show');
		}

		if (event.target.getAttribute('data-show') === 'delete-user') {
			document.getElementById('overlay')?.classList.add('show');
			document.getElementById('delete-user')?.classList.add('show');
		}

		if (event.target === document.querySelector('.chat_body_header_button')) {
			document.getElementById('change-avatar')?.classList.add('show');
			document.getElementById('overlay')?.classList.add('show');
		}


    },

    submit: function (event: any) {
        if (event.target === document.getElementById('add-chat')) {
            event.preventDefault();

            const form: HTMLFormElement = event.target;
            const checked: boolean = checkForms(form);
            if(checked === false) {return};

            const formData = new FormData(form);
            chat_controller.createChat(formData);
			event.target.classList.remove('show');
			document.getElementById('overlay')?.classList.remove('show')
		}

		if (event.target === document.getElementById('delete-user')) {
            event.preventDefault();

            const form: HTMLFormElement = event.target;
            const checked: boolean = checkForms(form);
            if(checked === false) {return};

            const formData = new FormData(form);

            chat_controller.deleteUser(formData);
			event.target.classList.remove('show');
			document.getElementById('overlay')?.classList.remove('show')
		}

		if (event.target === document.getElementById('add-user')) {
            event.preventDefault();

            const form: HTMLFormElement = event.target;
            const checked: boolean = checkForms(form);
            if(checked === false) {return};

            const formData: FormData = new FormData(form);
            chat_controller.addUser(formData);
			event.target.classList.remove('show');
			document.getElementById('overlay')?.classList.remove('show')
		}

		if(event.target === document.getElementById('send-message')) {
			event.preventDefault();
			const checked: boolean = checkForms(event.target);
			if(checked === false) {return};
			const formdata = new FormData(event.target);
			const data = objFromForm(formdata);
			chat_controller.sendMessage(data.message);
			event.target.elements.message.value = '';
		}

		if (event.target === document.getElementById('change-avatar')) {
			event.preventDefault();
			const form: any = document.getElementById('change-avatar');
			const formData = new FormData(form);
			chat_controller.changeChatAvatar(formData);
			form?.classList.remove('show');
			document.getElementById('overlay')?.classList.remove('show');
		}

		if (event.target === document.getElementById('search-chat')) {
			event.preventDefault();
			const form: any = document.getElementById('search-chat');
			const formData = new FormData(form);
			chat_controller.getchats(formData);
			form.elements.title.value = '';
		}
    }
}


const changeAvatar = {
	fieldName: 'title',
	id_element: "change-avatar",
	content: "Загрузите фото",
	'text': 'Поменять',
}

const addChatPopup: {[k in string]: any} = {
    fieldName: 'title',
    inputClass: 'input_label',
    labelValue: 'Название',
    inputType: 'text',
    class: 'form_input blue_input',
    form_class: "add_chat_form",
    id_element: "add-chat",
    content: "Создать чат",
    'text': 'Добавить',
}

const addUserPopup: {[k in string]: any} = {
    fieldName: 'login',
    inputClass: 'input_label',
    labelValue: 'Логин',
    inputType: 'text',
    class: 'form_input blue_input',
    form_class: "add_user_form",
    id_element: "add-user",
    content: "Добавить пользователя",
    'text': 'Добавить',
}

const deleteUserPopup: {[k in string]: any} = {
	fieldName: 'login',
    inputClass: 'input_label',
    labelValue: 'Логин',
    inputType: 'text',
    class: 'form_input blue_input',
    form_class: "delete_user_form",
    id_element: "delete-user",
    content: "Удалить пользователя",
    'text': 'Удалить',
}

export const children = {
	chat_list: new Chat_list(),
	chat_body: new Chat_body(),
	add_chat: new PopupForm(addChatPopup),
	add_user: new PopupForm(addUserPopup),
	delete_user: new PopupForm(deleteUserPopup),
	change_avatar: new PopupUpload(changeAvatar),
}


