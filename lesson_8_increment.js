'use strict'

let i = 0;

i++; // i = i + 1
console.log(i); // 1

i--;
console.log(i); // 0

console.log(i++); // 0
console.log(i); // 1

console.log(i++ + 10); // 11
console.log(i); // 2 

++i;
console.log(i); // 3
console.log(++i); // 4
console.log(++i * 2); // 10
console.log(i); // 5

i += 5; //  i = i + 5
console.log(i); // 10

i -= 5;
console.log(i); // 5

i *= 3;
console.log(i); // 15

i /= 3;
console.log(i); // 5

i %= 3;
console.log(i); // 2