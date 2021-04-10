
const chai = require('chai')
const sinon = require ('sinon');
const sinonChai = require('sinon-chai')
import {signin_api} from '../SIGNIN/signin_api';

const expect = chai.expect;
chai.use(sinonChai);


let server: any
server = sinon.fakeServer.create();
server.respondWith('POST', '/auth/signup',
    [200, { 'Content-Type': 'application/json' },
     '{id: 0}']);

describe('test_api', function() {
    it('returns status 200', async function (done) {

        const test_data = {'test_data': 'test_data'}

        signin_api.signup(test_data).then((res) => expect(res).to.have.property('status').to.de.equal(200))
        done()
  });

  it('returns body {id:0}', async function (done) {

    const test_data = {'test_data': 'test_data'}

    signin_api.signup(test_data).then((res) => expect(res).to.have.property('response').to.de.equal({id: 0}))
    done()
});
})
