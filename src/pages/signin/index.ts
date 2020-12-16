import {render} from "../../funcs/render.js";
import {signin} from "./signin.js";
import {signinButton} from "../../modules/button/signinButton.js"
import {valdata} from "../../data/valData.js"

render (".wrapper", signin);
render (".for-button", signinButton);

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