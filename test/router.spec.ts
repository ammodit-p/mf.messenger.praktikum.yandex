require('jsdom-global')('<body><div class="app"></div></body>', {
    url: "https://example.org/",
    referrer: "https://example.com/",
  })
import { expect } from "chai";
import { router } from "../src/initialaze";


describe ('router check chat', function() {

    before(function () {
        router.go('/chat')
    })
    it('should go to chat', function(){
        expect(global.location.pathname).to.be.equal('/chat')
    })

})


describe ('router check 404', function() {

    before(function () {
        router.go('/wrong_page')
    })
    it('should go to 404', function(){
        expect(global.location.pathname).to.be.equal('/404')
    })

})





