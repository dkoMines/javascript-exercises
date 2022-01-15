const reverseString = function(str) {
    i = str.length
    let newStr = ""
    while (i--){
        newStr = `${newStr}${str[i]}`
    }
    return newStr
};

// Do not edit below this line
module.exports = reverseString;
