import {change_pass_controller} from './change_pass_controller';
import {checkForms} from '../../funcs/forms/checkForms';

export const events = {
    submit: function (event: any) {
        event.preventDefault();

        const form: any = document.forms[0]
        const checked: boolean = checkForms(form);
        if(checked === false) {return};

        change_pass_controller.changepass(new FormData(form))
},

    focusout: function(event: any) {
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
            change_pass_controller.go('/profile')
        }
    }
}
