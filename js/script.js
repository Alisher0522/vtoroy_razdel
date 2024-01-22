'use strict';

console.log('hello alisher');
const arr = [1, 2, 3];

console.log(arr);

let number = 5;
const leftBorderWidth = 1;

number = '10';

console.log(number);
console.log(leftBorderWidth);

const person = {
	name: 'Alisher',
	age: 25,
	tel: 1422
};

const workers = ['alisher', 'iskandar', 'others'];

workers.push('tillo');
console.log(workers);

person['gender'] = 'Male';
person.tel = 9981;
console.log(person, Object.keys(person), typeof(number));

// const result = confirm('Tastiqlaysizmi?');
// console.log(result);

const answer = prompt('Yoshingiz nechida?', '');
console.log(answer);
