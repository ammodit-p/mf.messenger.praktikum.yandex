
import {router} from "../../initialaze.js";
import {checkForms} from "../../funcs/forms/checkForms.js";
    
export const events = {
    submit: function onSubmit (event: any) {
        event.preventDefault();
    
        const form: any = document.forms[0]
        const checked: boolean = checkForms(form);
        if(checked === false) {return}; 
        router.go('./chat')
    },
    
    blur: function onBlur () {
        const form: any = document.forms[0]
        for (let item of form) {
            if(!item.value) {
                item.classList.add("blue-input-invalid")
            }
        }
    },
    
    focus: function onFocus () {
        const form: any = document.forms[0]
        for (let item of form) {
            if(!item.value) {
                item.classList.remove("blue-input-invalid")
            }
        }
    },

    signin: function goSignin (event: any) {
        if (event.target == document.querySelector('.signin')) {
            event.preventDefault()
            router.go('/signin')
        }
    }
}