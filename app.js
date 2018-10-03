const sum = function (one, two){
    if (typeof(one) === "string" || typeof(two) === "string") {
        throw new Error('parameters must be a number')
    }
    return one + two;
}

const firstLetterOfWord = function(word) {
    if (typeof(word) !== "string"){
        throw new Error('mjust be string ')
    }
    
        return word[0];

}

// TODO: function that breaks sentence into multiple words

module.exports = {
    sum: sum,
    firstLetterOfWord: firstLetterOfWord
}; 

