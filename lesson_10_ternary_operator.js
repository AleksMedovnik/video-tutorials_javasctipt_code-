'use strict'

const validPassword = '123abc';

const userPassword = prompt('Введите пароль', '');

const message = (userPassword === null) ? 'Вы отменили ввод данных'
    : (userPassword === '') ? 'Вы ничего не ввели'
    : (userPassword === validPassword) ? 'Вы вошли на сайт!'
    : 'Пароль неверный!';


alert(message);
