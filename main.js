
// створення змінних

let hello = 'hello';
let owu = 'owu';
let com = 'com';
let ua = 'ua';
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
const PI = 3.14;
const E = 2.7;
let num5 = 16;
let bool1 = true;
let bool2 = false;

//виведення змінних в консоль

console.log(hello);
console.log(owu);
console.log(com);
console.log(ua);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(PI);
console.log(E);
console.log(num5);
console.log(bool1);
console.log(bool2);

//Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Dmytro';
let middleName = 'Sergiiovych'
let lastName = 'Zhurakivskyi';

let person = `${firstName} ${middleName} ${lastName}`;
console.log(person);

//За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.

let a = 100;
let b = '100';
let c = true;

console.log(typeof (a));
console.log(typeof (b));
console.log(typeof (c));