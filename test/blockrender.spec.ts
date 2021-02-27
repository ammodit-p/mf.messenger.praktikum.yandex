require('jsdom-global')('<body></body>', {
    url: "https://example.org/",
    referrer: "https://example.com/",
  })
import { expect } from "chai";
import Block from "../src/classes/classBlock"
import * as Handlebars from 'handlebars'

const mock_tmpl = `{{text}}`

describe ('block test div', function(){
    global.Handlebars = Handlebars
    const test_block = new Block('div', {data:{text: 'HELLO'}}, mock_tmpl, 'test_class')
    const el:any = global.document.createElement('div')
    el.appendChild(test_block.getContent())

    it('render div with HELLO text', function() {
        expect(el.innerHTML).to.be.equal('<div class="test_class">HELLO</div>')
    })
})

describe ('block test button', function(){
    global.Handlebars = Handlebars
    const test_block = new Block('button', {data:{text: 'HELLO'}}, mock_tmpl, 'test_class')
    const el:any = global.document.createElement('div')
    el.appendChild(test_block.getContent())

    it('render button with HELLO text', function() {
        expect(el.innerHTML).to.be.equal('<button class="test_class">HELLO</button>')
    })
})