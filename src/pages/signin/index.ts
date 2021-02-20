

import {valdata} from "../../funcs/checkFrorms/valData.js"



const inputs: any  = document.forms[0];

function  isEmpty (inputs: any): void {

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

const form: any = document.querySelector("form")
form.addEventListener('submit',(e: any) =>{
    e.preventDefault();
     isEmpty(form);
     validate(form, valdata)
});

function focusBlur (inputs: any): void {
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