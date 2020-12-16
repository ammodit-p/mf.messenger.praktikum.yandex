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
             
            item.classList.add("blue-input-invalid");
            return
        }

    }
}

function validate (inputs: any, valdata: any): void {
    for (let item of inputs) {
        if (item.name === "login") {
            let val: string = valdata.login;
            if (val !== item.value) {
                item.classList.add("blue-input-invalid");
                return
            }
        }
        if (item.name === "password") {
            let val: string = valdata.password;
            if (val !== item.value) {
                 
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
});

function focusBlur (inputs): void {
    console.log(inputs)
    for (let item of inputs) {
        item.addEventListener('blur', ()=> {
            isEmpty(form)
        })
        item.addEventListener('focus', ()=> {
            item.classList.remove("blue-input-invalid")
        } )
    }
};

focusBlur(inputs);