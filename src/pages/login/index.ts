import {render} from "../../funcs/render.js";
import {login} from "./login.js";
import {loginButton} from "../../modules/button/loginButton.js"
import { valdata } from "../../data/valData.js";

render (".wrapper", login);
render(".for-button", loginButton)


const inputs: any  = document.forms[0];

function  isEmpty (inputs): void {

    for (let item of inputs) {
        if (item.type !== "submit" && !item.value) {
            console.log("im here")
            item.classList.add("blue-input-invalid");
            return
        }

    }
}

function validate (inputs: any, valdata: any): void {
    for (let item of inputs) {
        if (item.name === "login") {
            let val: string = validate.login;
            if (val !== item.value) {
                item.classList.add("blue-input-invalid");
                return
            }
        }
        if (item.name === "password") {
            let val: string = validate.password;
            if (val !== item.value) {
                console.log("im here")
                item.classList.add("blue-input-invalid");
                return
            }
        }
    }
}

const form = document.querySelector("form")
form.addEventListener('submit',(e) =>{
    e.preventDefault();
     isEmpty(form);
     validate(form, valdata)
})

form.addEventListener('blur', (e)=> {
    e.preventDefault();
    isEmpty(form);
    validate(form, valdata)
})