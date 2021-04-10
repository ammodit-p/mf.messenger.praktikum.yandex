
require('jsdom-global')("<body><div class='app'></div></body>", {
    url: 'https://localhost:3000/',
  })
import { expect } from 'chai';

import { Router} from '../classRouter';

const router = new Router('.app');

class TestBlock {
	constructor() {}
	getContent(): HTMLElement {
		const el = global.document.createElement('div');
		return el;
	}
	delete(): void {
		this.getContent().remove();
	}
}

describe('router test', function() {
	before(function() {
	})

    describe ('router check location', function() {

        before(function () {
			router.use('/', TestBlock).use('/test', TestBlock).use('/404', TestBlock).start();
            router.go('/test')
        })
        it('should go to test', function(){
            expect(global.location.pathname).to.be.equal('/test')
        })

	})

	describe('router go to 404', function() {
		it('should go to 404', function() {
			router.use('/', TestBlock).use('/test', TestBlock).use('/404', TestBlock).start();
			router.setErrorPage('/404')
			router.go('/1234')
			expect(global.location.pathname).to.be.equal('/404')
		})
	})

	after(function() {
		router.deleteRoute('/test');
	})
})






