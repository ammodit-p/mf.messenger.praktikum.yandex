import { expect } from 'chai';
import {Button} from '../button/classButton'
import {button_tmpl} from '../button/button_tmpl'
import * as Handlebars from 'handlebars'



describe ('block test div', function(){
    global.Handlebars = Handlebars
    const test_block = new Button('div', {data:{text: 'HELLO'}}, button_tmpl, 'test_class')
    const el:any = global.document.createElement('div')
    el.appendChild(test_block.getContent())

    it('render button with HELLO text', function() {
        expect(el.innerHTML).to.be.equal('<div class="test_class"><button type="submit" class="submit_button blue" value="button">HELLO</button></div>')
    })
})

describe ('render button with IM BUTTON text', function(){
    global.Handlebars = Handlebars
    const test_block = new Button('div', {data:{text: 'IM BUTTON'}}, button_tmpl, 'test_class')
    const el:any = global.document.createElement('div')
    el.appendChild(test_block.getContent())

    it('render button with HELLO text', function() {
        expect(el.innerHTML).to.be.equal('<div class="test_class"><button type="submit" class="submit_button blue" value="button">IM BUTTON</button></div>')
    })
})
