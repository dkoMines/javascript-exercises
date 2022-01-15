const removeFromArray = function() {
    args = [];
    for (const a of arguments){
        args.push(a);
    }
    l = arguments[0];
    args.shift();
    for (const c of args){
        for (let i=0; i < l.length; i++) {
            if (l[i] === c){
                l.splice(i,1);
                i--;
            }
        }
    }
    return l;

};

// Do not edit below this line
module.exports = removeFromArray;
