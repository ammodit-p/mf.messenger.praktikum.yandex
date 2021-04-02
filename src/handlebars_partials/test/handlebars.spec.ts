import { expect } from 'chai';
import * as Handlebars from 'handlebars';

const test_tmpl = `<p>{{text}}</p>`
const templ = Handlebars.compile(test_tmpl)

describe('handlebars test', function() {
    it('should compile a domstring', function() {
        expect(templ({text: 'тест'})).to.be.equal('<p>тест</p>')
    })
})
