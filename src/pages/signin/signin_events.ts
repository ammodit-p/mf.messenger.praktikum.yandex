import {router} from '../../index';
import {checkForms} from '../../funcs/forms/checkForms';
import {signin_controller} from './signin_controller';

export const events = {
    submit: function (event: any) {
        event.preventDefault();

        const form: any = document.forms[0]
        const checked: boolean = checkForms(form);
        if(checked === false) {return};
        signin_controller.signup(new FormData(form))
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
        if (event.target == document.querySelector('#auth')) {
            event.preventDefault()
            router.go('/')
        }
    }
}
