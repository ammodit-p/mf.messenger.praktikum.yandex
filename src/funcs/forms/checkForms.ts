
import {checkEmptyForm} from './checkEmpty';
import {validate} from './validate';

export function checkForms (form: any): boolean {
    checkEmptyForm(form)

    if(validate(form) === false) {
        return false
    }

    return true
}
