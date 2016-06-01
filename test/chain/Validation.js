var { Validation } = require("../../libraries/chain");
var assert = require("assert");

describe("Validation", () => {


    describe("is_object_id", () => {
        it("Is valid object id", ()=> {
            assert(Validation.is_object_id("1.3.0") === true);
        })

        it("Is not valid object id", ()=> {
            assert(Validation.is_object_id("1.3") === false);
        })

        it("Not string", ()=> {
            assert(Validation.is_object_id(3) === false);
        })
    })
    

});