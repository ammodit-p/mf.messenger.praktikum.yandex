import {checkForms} from '../../funcs/forms/checkForms';
import {change_user_controller} from './change_user_controller';

export const events = {
    submit: function (event: any) {
        event.preventDefault();

        const form: any = document.forms[0]
        const checked: boolean = checkForms(form);
        if(checked === false) {return};
        change_user_controller.changeuser(new FormData(form))
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
