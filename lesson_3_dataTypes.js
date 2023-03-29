'use strict'

// number
let k = 10
let x = 1.5

console.log(1 / 0) // Infinity
console.log(-1 / 0) // -Infinity

console.log('Hello' * 5) // NaN
console.log(NaN === NaN) // false

// bigInt
let n = 90071992547409999n // больше, чем  (2 ** 53 - 1)
let y = -90071992547409999n // меньше, чем  -(2 ** 53 - 1)


// boolean
console.log(1 > 0) // true
console.log(1 < 0) // false


// string
let message = 'Hello';
let message2 = "World";
console.log("I'm so happy!")
let message3 = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="./lesson_3_dataTypes.js" defer></script>
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>
`;

console.log(`Дважды два равно ${2 * 2}`) // Дважды два равно 4
console.log(message + message2) // HelloWorld

// null
// let password = prompt('Введите пароль: ')
// alert(password)


// undefined
let userName;
console.log(userName) // undefined
userName = 'John'
console.log(userName) // John