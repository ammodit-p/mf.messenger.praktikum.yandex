import {checkForms} from "../../funcs/forms/checkForms";
import change_user_controller from "./change_user_controller"
import jsonify from '../../funcs/jsonify'
    
export const events = {
    submit: function (event: any) {
        event.preventDefault();

        const form: any = document.forms[0]
        const checked: boolean = checkForms(form);
        if(checked === false) {return}; 
        const formdata = new FormData(form)
        
        const json = jsonify (formdata)

        change_user_controller.put(json)
},



    focusout: function(event:any) {
        if (!event.target.value) {
            event.target.classList.add('invalid');
        }
    },

    focusin: function(event: any) {
        event.target.classList.remove('invalid');
    },

    click: function (event: any) {
        if (event.target == document.querySelector('#profile')) {
            event.preventDefault()
            change_user_controller.go('/profile')
        }
    }
}
