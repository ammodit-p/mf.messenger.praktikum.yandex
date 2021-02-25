import {router} from "../../initialaze.js";
import chat_controller from "./chat_controller.js";
import objFromForm from "../../funcs/objFromForm.js";
import {checkForms} from "../../funcs/forms/checkForms.js"

export const events = {
    click: function (event:any) {
        if (event.target === document.querySelector("#profile")) {
            event.preventDefault()
            router.go('/profile')
        }

        if (event.target === document.querySelector(".add_chat svg")) {
            const popup: any = document.querySelector(".popup")
            popup.classList.add('show')
        }

        if (event.target === document.querySelector(".popup")) {
            const popup: any = document.querySelector(".add_chat_form")
            popup.classList.remove('show')
        }
    },

    submit: function (event: any) {
        if (event.target === document.querySelector(".add_chat_form")) {
            event.preventDefault();
    
            const form: any = document.forms[0]
            const checked: boolean = checkForms(form);
            if(checked === false) {return}; 

            const formdata = new FormData(form)
            const data= objFromForm(formdata)
            const json = JSON.stringify(data)
            chat_controller.post(json)
            event.target.classList.remove('show')
        }
    }
}