'use strict'
// переменная

let x = 1;
console.log(x)
x = 0
console.log(x)

let a;
a = 10;
console.log(a)

// let x = 0;

var b = 1; // устаревший способ объявления переменной

const y = 1;
// y = 0 - Assignment to constant variable.

const WINDOW_WIDTH = 1200
const TOKEN = 'yy7w389jkpospopoe['


// ограничения для имен переменных
// разрешены только 2 символа: 
let _ = 123
let $ = 456

let user1 = 'John'
// let 1use - имя переменной не должно начинаться с цифры

let userName = 'Bob';
let user_age = 21;

console.log(z); // undefined
var z = 1;
console.log(z); // 1

// console.log(e); // Cannot access 'e' before initialization
let e = 100;

console.log(u); // undefined
{
    let t = 1;
    console.log(t); // 1
    var u = 10;
    const o = 10;
}

// console.log(t); // ReferenceError: t is not defined
console.log(u); // 10
// console.log(o); 

for (let i = 0; i < 5; i++) {
    console.log(i); // 0 - 4
}

// console.log(i); // ReferenceError: i is not defined