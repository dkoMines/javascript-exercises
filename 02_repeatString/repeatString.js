const repeatString = function(str, repeatAmount) {
    if (repeatAmount < 0){
        return "ERROR";
    }
    finalString = ""
    for (let i=0; i<repeatAmount; i++){
        finalString += str;
    }
    return finalString
};

// Do not edit below this line
module.exports = repeatString;
