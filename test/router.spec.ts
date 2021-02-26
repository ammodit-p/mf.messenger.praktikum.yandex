const jsdom = require('mocha-jsdom')
import { expect } from "chai";
import { router } from "../src/initialaze";
import Block from "../src/classes/classBlock";
import * as Handlebars from 'handlebars';


const mock_tmpl = `<p>{{text}}</p>`;



describe ('router', function() {
    jsdom({ url: 'http://localhost:3000' });
    global.Handlebars = Handlebars

    before(function () {
        const mock_block = new Block('div', {data: {text: "тест"}}, mock_tmpl, 'mock_class')
        router.use('/test', mock_block)
        router.go('/test')
    })
    it('should do sth', function(){
        expect(global.location.pathname).to.be.equal('/505')
    })
})





