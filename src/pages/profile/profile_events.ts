
import {profile_controller} from './profile_controller';

export const events = {
    click: function (event: MouseEvent) {
        if(event.target === document.querySelector('#chats')) {
            event.preventDefault()
            profile_controller.go('/chat')
        }
        if(event.target === document.querySelector('.user-data')) {
            event.preventDefault()
            profile_controller.go('/change-user-data')
        }
        if(event.target === document.querySelector('.user-pass')) {
            event.preventDefault()
            profile_controller.go('/change-password')
        }

        if(event.target === document.querySelector('.logout')) {
            event.preventDefault()
            profile_controller.logout()
		}

		if (event.target === document.getElementById('overlay')) {
			document.querySelectorAll('.popup')?.forEach((element: HTMLElement) => {
				element.classList.remove('show');
			})
			document.getElementById('overlay')?.classList.remove('show');
		}

		if (event.target === document.querySelector('.profile_header_button')) {
			document.getElementById('change-avatar')?.classList.add('show');
			document.getElementById('overlay')?.classList.add('show');
		}
	},

	submit: function (event: MouseEvent | KeyboardEvent) {
		if (event.target === document.getElementById('change-avatar')) {
			event.preventDefault();
			const form: any = document.getElementById('change-avatar');
			const formData = new FormData(form);
			profile_controller.changeAvatar(formData);
			form?.classList.remove('show');
			document.getElementById('overlay')?.classList.remove('show');
		}
	},

	change: function (event: Event) {
		if (event.target === document.querySelector('input[type="file"]')) {
			document.querySelector('.file_upload')?.classList.add('show');
		}
	}
}

