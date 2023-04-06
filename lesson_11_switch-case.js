'use strict'

const value = +prompt('Enter the value: ');

switch (value) {
    case 1: // if value === 1
        alert('One');
        break;
    case 2:
        alert('Two');
        break;
    case 3:
        alert('Three');
        break;
    default:
        alert(value); 
}