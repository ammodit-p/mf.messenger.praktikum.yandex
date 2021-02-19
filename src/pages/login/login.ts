import {Block} from "../../classes/classBlock.js";
import {login_tmpl} from "./login_tmpl.js";
import {inputPartial} from "../../modules/inputPartial/inputPartial.js";
import {buttonPartial} from "../../modules/button/buttonPartial.js"
import {loginPage_data} from "./loginPage_data.js";
import {checkEmptyForm} from "../../funcs/checkEmpty.js";
import {validate} from "../../funcs/validate.js";
import { valdata } from "../../data/valData.js";
import {authApi} from "./auth_api.js";
import {Router} from "../../classes/classRouter.js"

inputPartial();
buttonPartial();

export class Login extends Block {
    constructor () {
        super("div", loginPage_data, login_tmpl);
    }



    addEvents() {
        const form: any = document.forms[0]
            form.addEventListener("submit", (e: any) => {
            e.preventDefault();

            const isEmpty = checkEmptyForm(form)
            if (isEmpty === true) {return}
            const validated = validate(form, valdata)
            if(validated === false) {return}

            const formData: FormData = new FormData(form);

            const api = new authApi (formData)
            api.result()
            })
        
        const signin: any = document.querySelector(".signin")
        signin.addEventListener('click', (e: any) => {
            e.preventDefault()
            const router = new Router(".wrapper") 
            router.go('/signin')
        })
    }
}
