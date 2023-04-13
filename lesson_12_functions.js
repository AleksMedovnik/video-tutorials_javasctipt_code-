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


checkPassword('123abc');
checkPassword('456zx');