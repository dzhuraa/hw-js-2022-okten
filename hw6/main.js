//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'




// let str1 = 'hello world'
// let str2 = 'lorem ipsum'
// let str3 = 'javascript is cool'

// console.log(str1.length)
// console.log(str2.length)
// console.log(str3.length)




// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'




// !!! змінні створені вверху !!!


// console.log(str1.toUpperCase())
// console.log(str2.toUpperCase())
// console.log(str3.toUpperCase())




// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'




// let str1 = 'HELLO WORLD'
// let str2 = 'LOREM IPSUM'
// let str3 = 'JAVASCRIPT IS COOL'
//
//
// console.log(str1.toLowerCase())
// console.log(str2.toLowerCase())
// console.log(str3.toLowerCase())




// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.




// let str = ' dirty string   '
//
// console.log(str.trim())




// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']




// function stringToArray (str) {
//     let split = str.split(' ')
//     console.log(split)
// }
//
// let str = 'Ревуть воли як ясла повні'
//
// stringToArray(str)




// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.




// let nums = [10,8,-7,55,987,-1011,0,1050,0]
//
// let map = nums.map(function(num) {
//     let newNum = num.toString()
//     return newNum
// })
//
// console.log(map);




// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]




// let nums = [11, 21, 3]
//
// let sort = nums.sort(function (a, b) {
//     return a - b  //  a - b / b - a
// })
//
// console.log(sort);




// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців




// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ]

// ----------- Варіант 1 --------------

// let sortCourses = coursesAndDurationArray.sort(function(course1, course2){
//     return course2.monthDuration - course1.monthDuration
// })
//
// let filterCourses = sortCourses.filter(function(value){
//     return value.monthDuration > 5
// })
//
// console.log(filterCourses);

// ----------- Варіант 2 --------------

// coursesAndDurationArray
//     .sort((course1, course2) => (course2.monthDuration - course1.monthDuration))
//     .filter(value => value.monthDuration > 5)
//     .forEach(value => console.log(value))




//  описати колоду карт
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }