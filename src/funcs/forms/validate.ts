
import {valdata} from './valData';

export function validate (form: any) {
    for (let item of form) {
        if (Object.keys(valdata).includes(item.name)) {
            let name: string = item.name
                if (valdata[name].test(item.value) === false){
                item.classList.add('invalid');
                return false
            }
        }
    }

    return true
}
