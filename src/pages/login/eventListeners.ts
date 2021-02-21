
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

    
    
    focusout: function(event:any) {
        if (!event.target.value) {
            event.target.classList.add('blue-input-invalid');
        }
      },
    
    focusin: function(event: any) {
        event.target.classList.remove('blue-input-invalid');
      },

    click: function goSignin (event: any) {
        if (event.target == document.querySelector('.signin')) {
            event.preventDefault()
            router.go('/signin')
        }
    }
}