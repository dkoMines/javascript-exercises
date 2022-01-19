const palindromes = function (phrase) {
    phrase = phrase.toLowerCase().replace(/\W/g, '');
    for (let i=0; i < phrase.length/2; i++){
        if (phrase[i] !== phrase[phrase.length-1-i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
