
const sinonChai = require ('sinon-chai')
const chai = require('chai')
const sinon = require ('sinon');
import Fetch from "../src/classes/classFetch";

const expect = chai.expect
chai.use(sinonChai);

const test_api = new Fetch

const test_data = {
        "email": "a@aa.com",
        "login": "login",
        "first_name": "name",
        "second_name": "surname",
        "phone": "89011112233",
        "password": "parole",
        "second_password": "parole"
}

describe ('test api', function() {
    const server = sinon.createFakeServer();

    afterEach(function() {
        server.restore();
    })   

    it ('should create new user', async function() {
        server.respondWith("POST", "/auth/signup",
            [200, { "Content-Type": "application/json" },
             '{ "id": 0 }']);

        sinon.spy(test_api, 'post')
        test_api.post('/auth/signup', {data: test_data, headers: {"Content-Type": "application/json"}});
        server.respond();

        expect(test_api.post).to.have.been.calledWith({"id": 0})
    })

})
    
        