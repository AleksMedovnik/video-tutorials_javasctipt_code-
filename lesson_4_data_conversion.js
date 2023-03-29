'use strict'

let userAge = +prompt('Введите ваш возраст: ')
alert(`В следующем году тебе испольнится ${userAge + 1}`)

// строковое преобразование
console.log('10' + 10) // '1010'
console.log(10 + '10') // '1010'
console.log('10' + true) // '10true'

// численное преобразование
console.log('10' - 5) // 5
console.log('10' * 5) // 50
console.log('10' / 5) // 2
console.log('10' / '5') // 2
console.log('10' - true) // 9
console.log(+'10' + 10) // 20
console.log(-'10' + 10) // 20
console.log(10 + +'10') // 20

console.log(10 == '10') // true
console.log(true == '1') // true
console.log(1 < '10') // true
console.log(100 >= '10') // true

console.log(10 === '10') // false

console.log(+'10') // 10
console.log(typeof(+'10')) // number
console.log(typeof(+'10') == 'number') // true
console.log(+'  10   ') // 10
console.log(+'1 0') // NaN
console.log(+'') // 0
console.log(+' ') // 0
console.log(+'hello') // NaN

console.log(+true) // 1
console.log(+false) // 0

console.log(+null) // 0
console.log(+undefined) // NaN


// логическое преобразование
console.log(!false); // true
console.log(!!false); // false
console.log(!!10); // true 
console.log(!!-10); // true 
console.log(!!0); // false
console.log(!!Infinity); // true
console.log(!!NaN); // false
console.log(!!'Hello'); // true
console.log(!!' '); // true
console.log(!!''); // false
console.log(!!null); // false
console.log(!!undefined); // false


console.log(1 + 2 + 'см'); // '3см'
console.log('$' + 1 + 2); // '$12'
console.log(undefined + 'hello'); // 'undefinedhello'
console.log(' -10 ' + 5); // ' -10 5'
console.log(' -10 ' - 5); // -15