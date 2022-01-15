const sumAll = function(low, high) {
    total = 0;
    if (typeof(low) == typeof(1) && typeof(high) == typeof(1) && low >= 0 && high >= 0){
        if (high < low){
            let tmp = high;
            high = low;
            low = tmp;
        }
        for (let i=low; i<high+1; i++){
            total += i;
        }
    } else {
        return "ERROR";
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
