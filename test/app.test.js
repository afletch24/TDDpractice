var appFunctions = require("../app.js");
var chai = require("chai");

describe('sum', () => {
    it ('returns the sum', () => {
        var example= appFunctions.sum(3,4);
        chai.assert.equal(example, 7)
    })

    it ('returns the sum', () => {
        var example= appFunctions.sum(0,4);
        chai.assert.equal(example, 4)
    })

    it ('throws an error when parameter is string', () => {
        chai.assert.throws(function() {
            appFunctions.sum(0,"4")
        })
    })

    // TODO: get these to pass (update implementation)
    // it ('throws an error when the parameter is not a number', () => {
    //     chai.assert.throws(function() {
    //         appFunctions.sum([], 0)
    //     })
    // })

    // TODO: get these to pass (update implementation)
    // it ('throws an error when the parameter is not a number', () => {
    //     chai.assert.throws(function() {
    //         appFunctions.sum(undefined, 0)
    //     })
    // })
})

describe('firstLetterOfWord', () => {
    it('it returns the first letter of the input string', () => {
        var letter = appFunctions.firstLetterOfWord("dog");
        chai.assert.equal(letter, "d");
    })

    it('throws an error if the input is not a string', () => {
        chai.assert.throws(function(){
            appFunctions.firstLetterOfWord(4);
        })
    })

    // TODO:
    // it('given input string: Prudence is my dog, throws error that input is multiple words', () => {
        
    // })
})

// TODO: unit tests for function that breaks sentence into multiple words

