'use strict'
const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (Array) => {
 const newArray = Array;
 let sum = newArray.reduce((a, b) => a + b, 0);
 console.log(sum);
}

getAverageValue(allСashbox);