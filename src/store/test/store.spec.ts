import {expect} from 'chai'
import {store} from '../Store'

describe ('store tests', function() {
	describe('store set test', function() {
		before(function() {
			store.set('test', {test: 'test_data'})
		})

		it('should return test object', function (){
			expect(store.get('test')).to.have.property('test').to.be.equal('test_data')
		})
	})

	describe('store emit observer', function() {
		let test = 'a'
		before(function() {
			function test_function () {
				return test = 'b'
			}
			store.setStoreObserver('test', test_function)
		})

		it('should emit observer on change', function() {
			store.set('test', {other_data: "test_data"})
			expect(test).to.be.equal('b')
		})
	})

	describe('store delete test', function() {
		before(function() {
			store.delete('test')
		})

		it('should not return test data', function() {
			expect(store.get('test')).to.be.an('undefined')
		})
	})
})
