import { expect } from 'chai';
import {Button} from '../button/classButton';
import * as Handlebars from 'handlebars';



describe ('block test div', function(){
    global.Handlebars = Handlebars
    const test_block = new Button({text: 'HELLO'})
    const el:any = global.document.createElement('div')
    el.appendChild(test_block.getContent())

    it('render button with HELLO text', function() {
        expect(el.innerHTML).to.be.equal('<div class="button"><button type="submit" class="submit_button blue" value="button">HELLO</button></div>')
    })
})

describe ('render button with IM BUTTON text', function(){
    global.Handlebars = Handlebars
    const test_block = new Button({text: 'IM BUTTON'})
    const el:any = global.document.createElement('div')
    el.appendChild(test_block.getContent())

    it('render button with HELLO text', function() {
        expect(el.innerHTML).to.be.equal('<div class="button"><button type="submit" class="submit_button blue" value="button">IM BUTTON</button></div>')
    })
})
