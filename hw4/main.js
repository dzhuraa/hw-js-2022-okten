//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.




// for (let i = 1; i <= 10; i++){
//     document.write(`
//         <div>
//             <p>
//                 -------------------
//             </p>
//             <h3>
//                 ${i}
//             </h3>
//             <p>
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, veritatis.
//             </p>
//         </div>
//     `)
// }


// let i = 1
// while (i <= 20){
//     document.write(`
//         <h1>
//             ${i} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, veritatis.
//         </h1>
//     `)
//     i++
// }




//- Використовуючи дані з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону




// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// document.write(`<ul>`)
// for (const listOfItem of listOfItems) {
//     document.write(`<li>${listOfItem}</li>`)
// }
// document.write(`</ul>`)




//Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон




// document.write(`<div class="container">`)
//     let products = [
//         {
//             title: 'milk',
//             price: 22,
//             image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//         },
//         {
//             title: 'juice',
//             price: 27,
//             image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//         },
//         {
//             title: 'tomato',
//             price: 47,
//             image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//         },
//         {
//             title: 'tea',
//             price: 15,
//             image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//         },
//     ]
//     for (const product of products) {
//         document.write(`
//             <div class="product-card">
//                 <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
//                 <img src="${product.image}" alt="" class="product-image">
//             </div>
//         `)
//     }
// document.write(`</div>`)




//є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//  за допомоги циклу вивести:
//  - користувачів зі статусом true
//  - користувачів зі статусом false
//  - користувачів які старші за 30 років




// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ]

// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     if (user.status === true){
//         document.write(`<h2>${user.name}</h2>`)
//     }
// }

// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     if (!user.status === true){
//         document.write(`<h2>${user.name}</h2>`)
//     }
// }

// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     if (user.age > 30){
//         document.write(`<h2>${user.name}</h2>`)
//     }
// }