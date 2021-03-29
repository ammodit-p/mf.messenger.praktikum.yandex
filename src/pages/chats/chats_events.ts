import {router} from '../../initialaze';
import chat_controller from './chat_controller';
import jsonify from '../../funcs/jsonify';
import {checkForms} from '../../funcs/forms/checkForms';
import objFromForm from '../../funcs/objFromForm';

export const 	events = {
    click: function (event:any) {
        if (event.target === document.querySelector('#profile')) {
            event.preventDefault();
            router.go('/profile');
        }

        if (event.target === document.querySelector('.add_chat svg')) {
			const popup: any = document.getElementById('add-chat');
			popup.classList.add('show');
        }

        // if (event.target !== document.getElementById('add-chat')) {
        //     const popup: any = document.getElementById('add-chat');
        //     popup.classList.remove('show');
		// }

		if (event.target.getAttribute('data-show') === 'show-chat-window') {
			const chat: any = document.querySelector('.chat_body');
			chat_controller.propsToBody(event.target.id);
			chat_controller.getToken();
			chat.classList.add('show');
		}

        if (event.target.getAttribute('data-show') === 'delete-chat') {
			debugger
			const popup: any = document.getElementById('delete-chat');
			popup.classList.add('show');
        }


    },

    submit: function (event: any) {
        if (event.target === document.getElementById('add-chat')) {
            event.preventDefault();

            const form: any = event.target;
            const checked: boolean = checkForms(form);
            if(checked === false) {return};

            const formdata = new FormData(form);

			const json = jsonify (formdata);
            chat_controller.createChat(json);
            event.target.classList.remove('show');
		}

		if (event.target === document.getElementById('delete-chat')) {
            event.preventDefault();

            const form: any = event.target;
            const checked: boolean = checkForms(form);
            if(checked === false) {return};

            const formdata = new FormData(form);

			const json = jsonify (formdata);
            chat_controller.deleteChat(json);
            event.target.classList.remove('show');
		}

		if(event.target === document.querySelector('#send-message')) {
			event.preventDefault();
			const checked: boolean = checkForms(event.target);
			if(checked === false) {return};
			const formdata = new FormData(event.target);
			const data = objFromForm(formdata);
			chat_controller.sendMessage(data.message);
		}
    }
}
