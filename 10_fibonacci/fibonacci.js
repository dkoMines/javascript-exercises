const fibonacci = function(index) {
    index = +index;
    if (index < 1){
        return "OOPS";
    }
    if (index == 1 || index == 2) return 1;
    return fibonacci(index-1) + fibonacci(index-2);
};

// Do not edit below this line
module.exports = fibonacci;
