// 
import {Block} from "../../classes/classBlock.js";
import {login_tmpl} from "./login_tmpl.js";
import {inputPartial} from "../../modules/inputPartial/inputPartial.js";
import {buttonPartial} from "../../modules/button/buttonPartial.js";
import {loginPage_data} from "./loginPage_data.js";
import {router} from "../../initialaze.js";
import {focusBlur} from "../../funcs/forms/focusBlur.js";
import {api} from "../../initialaze.js";
import {objFromForm} from "../../funcs/objFromForm.js";
import {checkForms} from "../../funcs/forms/checkForms.js";

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
            
            const checked: boolean = checkForms(form);
            if(checked === false) {return}; 

            const formData: FormData = new FormData(form);
            const data: {} = objFromForm(formData)

            api.canIGo("auth", data, "/chat")
            
            })
        
        
        const signin: any = document.querySelector(".signin")
        signin.addEventListener('click', (e: any) => {
            e.preventDefault()
            router.go('/signin')
        })
    }
}
