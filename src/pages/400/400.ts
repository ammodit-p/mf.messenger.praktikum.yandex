import Block from '../../classes/classBlock';
import {fourHundred_tmpl} from './400_tmpl';
import {events} from './400_events'

export class FourHundred extends Block {
    className: string
    constructor (className: string) {
        super('div', {events: events}, fourHundred_tmpl, 'wrapper');
        this.className = className
    }
}
