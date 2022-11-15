//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б




function triangleS (a, b) {
    let result = a * b
    console.log(result)
    return result
}

triangleS(10,5)




// - створити функцію яка обчислює та повертає площу кола з радіусом r




function circleS (r) {
    const PI = 3.14
    let result = PI * r**2
    console.log(result + ' метрів квадратних');
    return result
}

circleS(10)




// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r




function cylinderS (h, r) {
    const PI = 3.14
    let result = 2 * PI * r * (h + r)
    console.log(result + ' метрів квадратних')
    return result
}

cylinderS(5,2)




// - створити функцію яка приймає масив та виводить кожен його елемент




function arrayIter (arr) {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}

let array = [1, 5, 3.14, 'kokos', true, false, 'vasya', 'petya', 'kolya', 100500]

arrayIter(array)




// - створити функцію яка створює параграф з текстом. Текст задати через аргумент




function createText (text) {
    document.write(`
        <p>
            ${text}
        </p>
`)
}

createText('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores aspernatur, atque aut ' +
    'debitis deleniti doloremque earum enim esse est eum fuga fugiat harum hic incidunt, magnam maiores maxime minus ' +
    'nihil odio odit officia porro, quas temporibus totam. Accusantium, necessitatibus, obcaecati. A accusantium animi ' +
    'asperiores atque deleniti ea excepturi facilis harum illo labore magni minus molestiae nemo nulla officia pariatur ' +
    'quasi quia, quidem quisquam quod ratione tenetur vitae voluptas, voluptates voluptatibus. Animi architecto ' +
    'asperiores, consectetur cupiditate deleniti dolorum, ducimus eaque excepturi exercitationem in maiores minima ' +
    'molestiae nobis obcaecati odio praesentium quaerat quam quisquam quos reiciendis reprehenderit sit suscipit totam ' +
    'veritatis?')




// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий




function createListOfLi (li) {
    document.write(`
        <ul>
            <li>
                ${li}
            </li>
            <li>
                ${li}
            </li>
            <li>
                ${li}
            </li>
        </ul>
`)
}

createListOfLi('tomato')




// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл)




function createListOfLiAdvanced (li, quantity) {
    document.write(`<ul>`)
        for (let i = quantity; i--;) {
            document.write(`
                <li>
                    ${li}
                </li>
            `)
        }
    document.write(`</ul>`)
}

createListOfLiAdvanced('apple', 3)




// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список




function createListOfArray (array) {
    document.write(`<ul>`)
        for (const arrayElement of array) {
            document.write(`
                <li>
                    ${arrayElement}
                </li>
            `)
        }
    document.write(`</ul>`)
}

createListOfArray (array)    // ****** МАСИВ СТВОРЕНИЙ ВИЩЕ ПІД НАЗВОЮ array ******




// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.




function createBlocksWithObjectsOfArray (array) {
    document.write(`<div>`)
    for (const arrayElement of array) {
        document.write(`
            <ul>
                <li>${arrayElement.id}</li>
                <li>${arrayElement.name}</li>
                <li>${arrayElement.age}</li>
            </ul>
        `)
    }
    document.write(`</div>`)
}

let users = [
    user1 = {
        id: '1',
        name: 'Vasya',
        age: '30'
    },
    user2 = {
        id: '2',
        name: 'Petya',
        age: '28'
    },
    user3 = {
        id: '3',
        name: 'Kolya',
        age: '31'
    },
    user4 = {
        id: '4',
        name: 'Sasha',
        age: '27'
    },
    user5 = {
        id: '5',
        name: 'Oleg',
        age: '30'
    }
]

createBlocksWithObjectsOfArray(users)




// - створити функцію яка повертає найменьше число з масиву




function smallestNum (array) {
    let smallest = Math.min(...array)       //зробив методом, бо не знаю як зробити через цикл і if
    console.log(smallest)
    return smallest
}

let numArray = [100, -150, 25, 300, 1, 1000000, 3.14, 5]

smallestNum(numArray)




// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

//тут я -