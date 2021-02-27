// const nock = require('nock');
// require ("chai");
// import signin_api from "../src/pages/SIGNIN/signin_api"

// const test_data = {
//         "email": "a@aa.com",
//         "login": "login",
//         "first_name": "name",
//         "second_name": "surname",
//         "phone": "89011112233",
//         "password": "parole",
//         "second_password": "parole"
// }

// nock('https://ya-praktikum.tech/api/v2')
//   .post('/auth/signup', {
//     "email": /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
//     "login": /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/,
//     "first_name": /^[а-яА-ЯёЁa-zA-Z0-9]/,
//     "second_name": /^[а-яА-ЯёЁa-zA-Z0-9]/,
//     "phone": /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
//     "password": /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/,
//     "second_password": /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/
//   })
//   .reply(200, {
//     "id": 0
//   })


//   describe('signin_api', function() {
//       it('should create new user', async function() {
//         const res = await signin_api.signup(JSON.stringify(test_data))
//         res.should.have.property('status').equal(200)
//       })
//   })