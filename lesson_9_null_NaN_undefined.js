'use strict'

console.log(null >= 0); // true
console.log(null > 0); // false
console.log(null == 0); // false

console.log(null == undefined); // true
console.log(null === undefined); // false

console.log(undefined == undefined); // true
console.log(undefined === undefined); // true

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(isNaN(NaN)); // true
console.log(isNaN('hello')); // true
console.log(isNaN('123')); // false

console.log(+'hello'); // NaN

console.log(isNaN('')); // false
console.log(isNaN('1 2')); // true
console.log(isNaN(' 12 ')); // false
console.log(null == 0); // false
console.log(+null == 0); // true
console.log(null + 0 + true); // 1
console.log(null + 0 + undefined); // NaN