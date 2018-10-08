const sum = function (one, two){
    if (typeof(one) !== "number" || typeof(two) !== "number") {
        throw new Error('parameters must be a number')
    }
    return one + two;
}

const firstLetterOfWord = function(word) {
    if (typeof(word) !== "string" || word.includes(" ")){
        throw new Error('must be a string of one word')
    }
        return word[0];
}

// TODO: function that breaks sentence into multiple words
const singleWordMaker =  function(input){
    if (typeof(input) !== "string"){
        throw new Error('must be a string')
    }
    else {
        var words = input.split(" ");
        for(i=0; i <words.length; i++){
            console.log( words[i]);
        }
    }
}

module.exports = {
    sum: sum,
    firstLetterOfWord: firstLetterOfWord,
    singleWordMaker: singleWordMaker
}; 

