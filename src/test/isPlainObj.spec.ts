import { expect } from "chai";
import isPlainObj from "../funcs/isPlainObj"


describe ("isPlainObj positive", function () {

    it('simple positive test', function () {
        expect(isPlainObj({1: "a", 2: "b"})).to.be.equal(true)
    })

    it('object with array', function () {
        expect(isPlainObj({
            1: ["a", 3], 
            2: "b"
        })).to.be.equal(true)
    })

    it('object with null', function () {
        expect(isPlainObj({
            1: null,
            2: "b"
        })).to.be.equal(true)
    })

    it('object with undefined', function () {
        expect(isPlainObj({
            1: undefined,
            2: "b"
        })).to.be.equal(true)
    })

    it('object with function', function () {
        expect(isPlainObj({
            1: function f() {console.log('im function')},
            2: "b"
        })).to.be.equal(true)
    })
})


describe ("isPlainObj negative", function () {

    it('simple negative test', function () {
        expect(isPlainObj(1)).to.be.equal(false)
    })

})
