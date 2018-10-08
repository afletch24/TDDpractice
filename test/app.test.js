var appFunctions = require("../app.js");
var chai = require("chai");

describe('sum', () => {
    it ('returns the sum of 3+4', () => {
        var example= appFunctions.sum(3,4);
        chai.assert.equal(example, 7)
    })

    it ('returns the sum of 0+4', () => {
        var example= appFunctions.sum(0,4);
        chai.assert.equal(example, 4)
    })

    it ('throws an error when parameter is string', () => {
        chai.assert.throws(function() {
            appFunctions.sum(0,"4")
        })
    })

    // TODO: get these to pass (update implementation)
    it ('throws an error when the parameter is not a number', () => {
        chai.assert.throws(function() {
            appFunctions.sum([], 0)
        })
    })

    // TODO: get these to pass (update implementation)
    it ('throws an error when the parameter is not a number', () => {
        chai.assert.throws(function() {
            appFunctions.sum(undefined, 0)
        })
    })
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

    it('throws an error if the input is not a string', () => {
        chai.assert.throws(function(){
            appFunctions.firstLetterOfWord([]);
        })
    })

    it('throws an error if the input is not a string', () => {
        chai.assert.throws(function(){
            appFunctions.firstLetterOfWord(undefined);
        })
    })

    it('given input string: Prudence is my dog, throws error that input is multiple words', () => {
        chai.assert.throws(function(){
            appFunctions.firstLetterOfWord("Prudence is my dog");
        })
    })
})

// TODO: unit tests for function that breaks sentence into multiple words

describe('singleWordMaker', () => {
    it('throws an error if input is not a string', ()=>{
        chai.assert.throws(function(){
            appFunctions.singleWordMaker(4);
        })
    })
    it('throws an error if input is not a string', ()=>{
        chai.assert.throws(function(){
            appFunctions.singleWordMaker([]);
        })
    })
    it('throws an error if input is not a string', ()=>{
        chai.assert.throws(function(){
            appFunctions.singleWordMaker(undefined);
        })
    })
    // it("thows an error if there is a space included in the output", ()=>{
    //     chai.assert.throws(function(){
    //         appFunctions.singleWordMaker();
    //     }
    // })
})
