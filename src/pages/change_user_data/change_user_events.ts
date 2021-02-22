
import {router} from "../../initialaze.js";
import {checkForms} from "../../funcs/forms/checkForms.js";
    
export const events = {
    submit: function (event: any) {
        event.preventDefault();

        const form: any = document.forms[0]
        const checked: boolean = checkForms(form);
        if(checked === false) {return}; 
        router.go('/profile')
},



    focusout: function(event:any) {
        if (!event.target.value) {
            event.target.classList.add('blue-input-invalid');
        }
    },

    focusin: function(event: any) {
        event.target.classList.remove('blue-input-invalid');
    },

    click: function (event: any) {
        if (event.target == document.querySelector('.profile-return-button')) {
            event.preventDefault()
            router.go('/profile')
        }
    }
}