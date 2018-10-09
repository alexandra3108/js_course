'use strict';

function itsMe (a = "alexandra3108") {
let sign = "It’s me, " + a;
// console.log(sign)
return sign
}
    
function compare (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return console.log('НЕ ЧИСЛО');
    }
    else if (a > b) {
        return (`${a} > ${b}`);
    }
    else if (a < b) {
        return (`${a} < ${b}`);
    }
    else if (a === b) {
        return (`${a} == ${b}`);
    }
}

function row (a, b, c, d ) {
    let num = [];
    for (let i = 0; i < arguments.length - 1; i += 1) {
        num.push(arguments[i]);
    }

    switch (d) {
        case '<': 
            num.sort();
            return num.join(' < ');
            break;
        case '>': 
            num.sort().reverse();
            return num.join(' > ');
            break;
    }
}

 function fact (n) {
    let result;
    if (n == 0) {
        result = 1;
    }

    else {result = (n != 1) ? n * fact(n - 1) : 1;
    }
    return result;
        
}

function matrixDiff(a,b){
        let sum = 0;
        let diff;
        if(a.length === b.length){
            for(let i = 0; i < a.length; i++){
                if(a[i].length === b[i].length){
                    for(let j = 0; j<a[i].length; j++){
                        diff = Math.abs(a[i][j] - b[i][j]);
                        sum += diff;
                    }
                }else {
                    sum = NaN;
                }
            }
        }else {
            sum = NaN;
        }

       return sum;
    }
