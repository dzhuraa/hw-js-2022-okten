//- Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3




// let x = 0
//
// if (x != 0) {
//     document.write('Вірно')
// }else {
//     document.write('Невірно')
// }




//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).




// let time = +prompt('Яка хвилина?')
//
// if(time >=0 && time <= 15){
//     document.write('1')
// }else if(time >15 && time <= 30){
//     document.write('2')
// }else if(time >30 && time <= 45){
//     document.write('3')
// }else if(time >45 && time <= 59){
//     document.write('4')
// }


// let day = +prompt('Яке сьогодні число?')
//
// if(day >=1 && day <= 10){
//     document.write('1')
// }else if(day >10 && day <= 20){
//     document.write('2')
// }else if(day >20 && day <= 31){
//     document.write('3')
// }




//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).




// let day = +prompt('Який сьогодні день тижня?')


// switch (day){
//     case 1:
//         document.write('Monday')
//         break;
//     case 2:
//         document.write('Tuesday')
//         break;
//     case 3:
//         document.write('Wednesday')
//         break;
//     case 4:
//         document.write('Thursday')
//         break;
//     case 5:
//         document.write('Friday')
//         break;
//     case 6:
//         document.write('Saturday')
//         break;
//     case 7:
//         document.write('Sunday')
//         break;
//     default:
//         document.write('Error')
// }


//or


// if(day === 1){
//     document.write('Monday')
// }else if(day === 2){
//     document.write('Tuesday')
// }else if(day === 3){
//     document.write('Wednesday')
// }else if(day === 4){
//     document.write('Thursday')
// }else if(day === 5){
//     document.write('Friday')
// }else if(day === 6){
//     document.write('Saturday')
// }else if(day === 7){
//     document.write('Sunday')
// }




//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.




// let num1 = +prompt('Введіть 1 число:')
// let num2 = +prompt('Введіть 2 число:')
//
// if(num1 > num2){
//     document.write(num1, ' більше, ніж', num2)
// }else if(num2 > num1){
//     document.write(num2, ' більше, ніж', num1)
// }else if(num1 === num2){
//     document.write(num1, ' = ', num2)
// }




//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
// (хибноподыбне, тобто кастується до false)




// let x = +prompt('') || 'default'
// document.write(x)