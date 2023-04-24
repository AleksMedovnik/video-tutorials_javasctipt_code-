'use strict'

let user = 'John'; // global variable

sayHello(); // Hello, Vasya!

function sayHello() {
    let user = 'Vasya'; // local variable
    console.log(`Hello, ${user}!`);
}

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

console.log(sum(10, 20)); // 30

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

// Cannot access 'multiply' before initialization
// console.log(multiply(5, 3)); 

const multiply = function(a, b){
    return a * b;
}
console.log(multiply(5, 3)); // 15

const showHello = () => 'Hello!';
console.log(showHello()); // Hello!


const div = (a, b) => a / b;
console.log(div(10, 5)); // 2


checkPassword = validPassword => {
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

const double = x => x * 2;
console.log(double(10)); // 20