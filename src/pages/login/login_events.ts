
import {router} from "../../initialaze";
import {checkForms} from "../../funcs/forms/checkForms";
import jsonify from "../../funcs/jsonify";
import login_controller from "./login_controller"
    
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
