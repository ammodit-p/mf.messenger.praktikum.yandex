import {Block} from "../../classes/classBlock.js";
import {login_tmpl} from "./login_tmpl.js";
import {inputPartial} from "../../modules/inputPartial/inputPartial.js";
import {buttonPartial} from "../../modules/button/buttonPartial.js"
import {loginPage_data} from "./loginPage_data.js";
import {checkEmptyForm} from "../../funcs/checkEmpty.js";
import {validate} from "../../funcs/validate.js";
import { valdata } from "../../data/valData.js";
import {router} from "../../initialaze.js"
import {focusBlur} from "../../funcs/focusBlur.js";
import {authApi} from './auth_api.js'
import {api} from "../../initialaze.js";
import {objFromForm} from "../../funcs/objFromForm.js"

api.use("auth", authApi)


inputPartial();
buttonPartial();

export class Login extends Block {
    constructor () {
        super("div", loginPage_data, login_tmpl);
    }



    addEvents() {
        const form: any = document.forms[0]
            focusBlur(form)
            form.addEventListener("submit", (e: any) => {
            e.preventDefault();
            checkEmptyForm(form)

            const validated = validate(form, valdata)
            if(validated === false) {return}
            const formData: FormData = new FormData(form);
            const data = objFromForm(formData)

            const canIGo = api.canIGo("auth", data)
            if(canIGo === true) {
                router.go("/chats")
            }
            
            })
        
        
        const signin: any = document.querySelector(".signin")
        signin.addEventListener('click', (e: any) => {
            e.preventDefault()
            router.go('/signin')
        })
    }
}
