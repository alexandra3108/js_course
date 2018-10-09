'use strict';

 function removeKeys1(obj,arr){
        for (let item in obj){
            let k = arr.includes(item);
            if(k){
                delete obj[item];
            }
        }
        return obj;
    }
const obj = { a: 1, b: [], c: '' };
    const arr =['a', 'c'];
 removeKeys1(obj,arr );
// console.log(obj);


function removeKeys2 (obj, arr) {
	for (let item in obj){
            let k = arr.includes(item);
            if(k){
                delete obj[item];
            }
        }
let obj = arr.assign({}, obj);
        return obj;
    }
// console.log removeKeys2 (obj, arr);


let a = 3;
let b = 7;
function absDiff(a) {
	function abs2(b){
		console.log(abs2())	
	} return b - a
}

// console.log(absDiff(a));

