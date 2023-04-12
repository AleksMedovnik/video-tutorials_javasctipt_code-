'use strict'

function checkPassword() {
    const validPassword = "53679712";
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


// checkPassword();

let user = 'John'; // global variable

function sayHello() {
    let user = 'Vasya'; // local variable
    console.log(`Hello, ${user}!`);
}


sayHello(); // Hello, Vasya!
sayHello(); // Hello, Vasya!
console.log(user); // John