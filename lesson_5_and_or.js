'use strict'

console.log(true || false) // true
console.log(false || true) // true
console.log(true || true) // true
console.log(false || false) // false
console.log(1 || 0) // 1
console.log(null || 10) // 10
console.log(1 || 2 || 3) // 1
console.log(null || false || 0) // 0

console.log(true && false) // false
console.log(true && true) // true
console.log(-1 && 0) // 0
console.log(null && 0) // null
console.log(1 && 3 && 2) // 2 

console.log(1 > 0 && 3 < 5) // true

let value = 55; // [50; 100]
console.log(value >= 50 && value <= 100)