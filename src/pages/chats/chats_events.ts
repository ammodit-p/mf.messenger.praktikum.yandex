import {router} from '../../initialaze';
import chat_controller from './chat_controller';
import {checkForms} from '../../funcs/forms/checkForms';
import objFromForm from '../../funcs/objFromForm';

export const 	events = {
    click: function (event:any) {
        if (event.target === document.querySelector('#profile')) {
            event.preventDefault();
            router.go('/profile');
        }

        if (event.target === document.querySelector('.add_chat svg')) {
			const popup = document.getElementById('add-chat');
			popup?.classList.add('show');
			document.getElementById('overlay')?.classList.add('show');
        }

        if (event.target === document.getElementById('overlay')) {
			document.querySelectorAll('.popup')?.forEach((element: HTMLElement) => {
				element.classList.remove('show');
			})
			document.getElementById('overlay')?.classList.remove('show');
		}

		if (event.target.getAttribute('data-show') === 'show-chat-window') {
			const chat = document.querySelector('.chat_body');
			chat_controller.propsToBody(event.target.id);
			chat_controller.getToken();
			chat?.classList.add('show');
		}

        if (event.target.getAttribute('data-show') === 'delete-chat') {
			chat_controller.deleteChat();
			const chat = document.querySelector('.chat_body');
			chat?.classList.remove('show');
		}

		if (event.target.getAttribute('data-show') === 'add-user') {
			const popup = document.getElementById('add-user');
			document.getElementById('overlay')?.classList.add('show');
			popup?.classList.add('show');
		}

		if (event.target.getAttribute('data-show') === 'delete-user') {
			const popup = document.getElementById('delete-user');
			document.getElementById('overlay')?.classList.add('show');
			popup?.classList.add('show');
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
