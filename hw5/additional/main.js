//Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)


smallestNumber = (num1, num2, num3) => {
    let arr = [num1, num2, num3]
    let sorted = arr.sort((a, b) => (a - b))
    return sorted[0]
}

console.log(smallestNumber(10, 11, 9));


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

smallestNumber = (num1, num2, num3) => {
    let arr = [num1, num2, num3]
    let sorted = arr.sort((a, b) => (b - a))
    return sorted[0]
}

console.log(smallestNumber(10, 11, 9));

// - створити функцію яка повертає найбільше число з масиву

biggestNumArr = (arr) => {
    let sorted = arr.sort((a, b) => (b - a))
    return sorted[0]
}

let array = [100500, 1000, 25, 30, 2300]

console.log(biggestNumArr(array));


// - створити функцію яка повертає найменьше число з масиву

biggestNumArr = (arr) => {
    let sorted = arr.sort((a, b) => (a - b))
    return sorted[0]
}

console.log(biggestNumArr(array));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13


sumNum = (arr) => {
    let sum = 0
    for (const arrElement of arr) {
        sum += arrElement
    }
    return sum
}

array = [0, 10, 4, 5]



console.log(sumNum(array));


// - Дано натуральное число n. Выведите все числа от 1 до n.


let num = 7

for (let i = 1; i <= num; i++) {
    console.log(i);
}


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

numAB = (a, b) => {
    let array = []
    if (a < b) {
        for (let i = a; i <= b; i++) {
            array.push(i)
        }
    } else if (a > b) {
        for (let i = a; i >= b; i--) {
            array.push(i)
        }
    }
    return array
};


console.log(numAB(3, 10));


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]






// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]