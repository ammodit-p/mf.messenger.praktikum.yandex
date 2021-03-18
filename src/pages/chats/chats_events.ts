import {router} from "../../initialaze";
import chat_controller from "./chat_controller";
import jsonify from "../../funcs/jsonify";
import {checkForms} from "../../funcs/forms/checkForms";

export const events = {
    click: function (event:any) {
        if (event.target === document.querySelector("#profile")) {
            event.preventDefault();
            router.go('/profile');
        }

        if (event.target === document.querySelector(".add_chat svg")) {
            const popup: any = document.querySelector(".popup");
            popup.classList.add('show');
        }

        if (event.target === document.querySelector(".popup")) {
            const popup: any = document.querySelector(".popup");
            popup.classList.remove('show');
		}

		if (event.target === document.querySelector('.chatlist_list_item_handler')) {
			const chat: any = document.querySelector('.chat_body');
			chat_controller.propsToBody(event.target.id);
			chat_controller.getToken();
			chat.classList.add('show');
		}
    },

    submit: function (event: any) {
        if (event.target === document.querySelector(".add_chat_form")) {
            event.preventDefault();

            const form: any = document.querySelector('.popup')
            const checked: boolean = checkForms(form);
            if(checked === false) {return};

            const formdata = new FormData(form);

            const json = jsonify (formdata);
            chat_controller.post(json);
            event.target.classList.remove('show');
        }
    }
}
