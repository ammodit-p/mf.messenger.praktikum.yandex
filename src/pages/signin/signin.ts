import {Block} from "../../classes/classBlock.js";
import {signin_tmpl} from "./signin_tmpl.js";
import {inputPartial} from "../../modules/inputPartial/inputPartial.js";
import {signinPage_data} from "./signinPage_data.js";
import {buttonPartial} from "../../modules/button/buttonPartial.js";
import {router} from "../../initialaze.js";
import {focusBlur} from "../../funcs/forms/focusBlur.js";
import {checkForms} from "../../funcs/forms/checkForms.js";
import {api} from '../../initialaze.js';
import {objFromForm} from "../../funcs/objFromForm.js"

inputPartial();
buttonPartial();

export class Signin extends Block {
    constructor () {
        super("div", signinPage_data, signin_tmpl);
    }

    addEvents() {
        const form: any = document.forms[0]
            focusBlur(form)
            form.addEventListener("submit", (e: any) => {
                e.preventDefault();
                
                const checked: boolean = checkForms(form);
                if(checked === false) {return}; 

                const formData: FormData = new FormData(form);
                const data: {} = objFromForm(formData)
                api.create('auth', data, "/chat")

            });

        const signin: any = document.querySelector(".auth")
        signin.addEventListener('click', (e: any) => {
            e.preventDefault()
            router.go('/')
        })
    }
}

