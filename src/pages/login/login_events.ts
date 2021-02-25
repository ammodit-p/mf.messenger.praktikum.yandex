
import {router} from "../../initialaze.js";
import {checkForms} from "../../funcs/forms/checkForms.js";
import jsonify from "../../funcs/jsonify.js"
import login_controller from "./login_controller.js"
    
export const events = {
    submit: function onSubmit (event: any) {
            event.preventDefault();
    
            const form: any = document.forms[0]
            const checked: boolean = checkForms(form);
            if(checked === false) {return}; 

            const formdata = new FormData(form)
            const json = jsonify (formdata)
            login_controller.send(json)

    },

    
    
    focusout: function(event:any) {
        if (!event.target.value) {
            event.target.classList.add('invalid');
        }
      },
    
    focusin: function(event: any) {
        event.target.classList.remove('invalid');
      },

    click: function goSignin (event: any) {
        if (event.target == document.querySelector('#signin')) {
            event.preventDefault()
            router.go('/signin')
        }
    }
}