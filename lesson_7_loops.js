'use strict'

/* let i = 0;

while (i < 5) {
    console.log(i);
    i++; // i = i + 1
} */

// console.log(i) // 5

// const validPassword = '123abc';


/* while (true) {
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
} */


/* do {
    console.log(i);
    i--;
} while (i < 5 && i > 0);

console.log(i) // 0 */


/* for (let i = 0; i < 3; i++) {
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
} */

/* for (; ;) {
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
} */

exit: 
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        const data = prompt(`TR: ${i}; TD: ${j}`);
        if (data === 'exit'){
            alert('Exit');
            break exit;
        }
    }
}

alert('Stop!');