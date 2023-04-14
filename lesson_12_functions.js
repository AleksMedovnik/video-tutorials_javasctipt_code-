'use strict'

let user = 'John'; // global variable

function sayHello() {
    let user = 'Vasya'; // local variable
    console.log(`Hello, ${user}!`);
}


sayHello(); // Hello, Vasya!
sayHello(); // Hello, Vasya!
console.log(user); // John


function sayHi(user) {
    console.log(`Hi, ${user}!`);
}

sayHi('Marie'); // Hi, Marie!
sayHi('Tom'); // Hi, Tom!
sayHi('John'); // Hi, John!


function checkPassword(validPassword) {
    for (let i = 0; i < 3; i++) {
        const userPassword = prompt('Введите пароль', '');

        if (userPassword === null) {
            alert('Вы отменили ввод данных');
        } else if (userPassword === '') {
            alert('Вы ничего не ввели');
        } else if (userPassword === validPassword) {
            alert('Вы вошли на сайт!');
            break;
        } else {
            alert('Пароль неверный!');
        }
    }
}


// checkPassword('123abc');
// checkPassword('456zx');

function sum(a, b){
    return a + b;
}

console.log(sum(1, 2)); // 3

let result = sum(4, 5);

console.log(result); // 9

function mul(a, b, c){
    return a * b * c;
}

result = mul(2, 3, 5);
console.log(result); // 30

result = sayHello();
console.log(result); // undefined
// result = checkPassword('123abc');


function f() {
    console.log(1);
    console.log(2);
    // alert('Hello');
    // prompt('Введите число: ');
    return 1000, 10, 1;
}

let r = f();
console.log(r); // 


let d = double(10);
console.log(d); // 20
console.log(double(4)); // 8
console.log(double(5)); // 10