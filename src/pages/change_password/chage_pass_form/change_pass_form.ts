import Block from '../../../classes/classBlock';
import {Button} from '../../../modules/button/classButton'
import {button_tmpl} from '../../../modules/button/button_tmpl';
import {change_password_data} from '../change_password_data'
import {change_pass_form_tmpl} from './change_pass_form_tmpl';

import {inputPartial} from '../../../handlebars_partials/inputPartial/inputPartial';

inputPartial();


export class Change_password_form extends Block {
    constructor () {
        super('form', {
            data: change_password_data,
            children:{button: new Button ('div', {data: {'text': 'Сохранить'}}, button_tmpl, '.button')}
        }, change_pass_form_tmpl, 'pass_form');
    }
}
