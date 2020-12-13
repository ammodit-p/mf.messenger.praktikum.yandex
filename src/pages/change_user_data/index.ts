import {render} from "../../funcs/render.js";
import {change_user_data} from "./change_user_data.js";
import {saveButton} from "../../modules/button/saveButton.js";
import {valdata} from "../../data/valData.js";

render (".wrapper", change_user_data);
render(".for-button", saveButton)

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
        if (item.name === "phone") {
            let reg: RegExp = valdata.tel;
            if (!reg.test(item.value)) {
                item.classList.add("blue-input-invalid");
                return
            }
        }
        if (item.name === "email") {
            let reg: RegExp = valdata.email;
            if (!reg.test(item.value)) {
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
