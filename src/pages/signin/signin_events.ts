import {router} from '../../initialaze';
import {checkForms} from '../../funcs/forms/checkForms';
import signin_controller from './signin_controller';
import jsonify from '../../funcs/jsonify';

export const events = {
    submit: function (event: any) {
        event.preventDefault();

        const form: any = document.forms[0]
        const checked: boolean = checkForms(form);
        if(checked === false) {return};

        const formdata = new FormData(form)
        const json = jsonify (formdata)
        signin_controller.signup(json)
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
