require('jsdom-global')('<body></div></body>', {
    url: "https://example.org/",
    referrer: "https://example.com/",
  })
import { assert } from "chai";
import Block from "../src/classes/classBlock"
import * as Handlebars from 'handlebars'

const mock_tmpl = `<p>{{text}}</>`

describe ('block test', function(){
    global.Handlebars = Handlebars
    const test_block = new Block('div', {data:{text: 'HELLO'}}, mock_tmpl, 'test_class')

    it('render div with HELLO text', function() {
        assert(test_block.getContent(), assert_block)
    })
})