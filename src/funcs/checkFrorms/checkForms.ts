
import {checkEmptyForm} from "./checkEmpty.js";
import {validate} from "./validate.js";

export function checkForms (form: any): boolean {
    checkEmptyForm(form)

    if(validate(form) === false) {
        return false
    }

    return true
}
