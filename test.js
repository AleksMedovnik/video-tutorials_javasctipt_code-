// let userAge = +prompt('Enter your age: ')
// console.log(typeof userAge)
// console.log(typeof userAge == 'number')
// alert(userAge + 1)

// Строковое преобразование
console.log(10 + '10'); // '1010'

// Численное преобразование
console.log('10' - '5'); // 5
console.log('10' * '5'); // 50
console.log('10' / '5'); // 2

console.log(10 + +'10'); // 20

console.log(10 > '5'); // true
console.log(10 >= '5'); // true
console.log('10' < '15'); // true
console.log(10 <= '15'); // true
console.log(10 == '10'); // true

console.log(1 == '1'); // true
console.log(1 === '1'); // false
console.log(1 === 1); // true
console.log('1' === '1'); // true

console.log(+''); // 0
console.log(+' '); // 0

console.log(+'1' + +'0'); // 1

console.log(+'   1000     '); // 1000

console.log(+'1 0'); // NaN

console.log(typeof(NaN)); // number

let notNumber = +'Hello!';
console.log(isNaN(notNumber)); // true
console.log(isNaN(NaN)); // true
console.log(isNaN(1000)); // false

console.log(NaN == NaN); // false

console.log(+true); // 1
console.log(+false); // 0

console.log(+undefined); // NaN

console.log(+null); // 0

console.log(true === !false); // true

console.log(!!true === true); // true

console.log(!!1000); // true
console.log(!!-1000); // true
console.log(!!Infinity); // true
console.log(!!-Infinity); // true

console.log(!!0); // false

console.log(!!NaN); // false

console.log(!!''); // false

console.log(!!'Hello, World!!!'); // true
console.log(!!' '); // true

console.log(!!undefined); // false

console.log(!!null); // false



// Проверить себя при решении следующих примеров
console.log( 1 + 3 + "px" ); // ?
console.log( "$" + 2 + 8 ); // ?
console.log( "5px" - 3 ); // ?
console.log( "  -10  " + 3 ); // ?
console.log( "  -10  " - 3 ); // ?
console.log( null + 1 ); // ?
console.log( undefined + 1 ); // ?