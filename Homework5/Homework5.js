// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами
// const square = (a, b) => a * b;
// console.log(square(10, 10));


// - створити функцію яка обчислює та повертає площу кола з радіусом r
// const squareCircle = (r)=> Math.PI * Math.pow(r ,2)
// console.log(squareCircle(10));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// const cilindre =(r,h)=>Math.PI * Math.pow(r,2)*h
// console.log(cilindre(5, 2));



// // - створити функцію яка приймає масив та виводить кожен його елемент
// let arr=[1,2,3,4]
// function foo (array){
//     for (const item of array) {
//         console.log(item);
//
//     }
// }
// foo (arr)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function foo(text) {
//     document.write(`<p>${text}</p>`)
//
// }
// foo ('Hello Yura')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function foo(text) {
//     document.write(`<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>`)
//
// }
// foo ('Hello Yura')




// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function foo(text,num) {
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`)
//
//     }
//     document.write(`</ul>`)
// }
// foo ('Hello',10)



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr=[1,2,3,true,false,'str']
// const elem = function (array){
//     document.write(`<ul>`)
//     for (const item of array) {
//         document.write(`<li>${item}</li>`)
//     }
//     }
//     document.write(`</ul>`)
// elem(arr);






// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let arr=[
//     {
//         name:'Stepan',
//         age: 35,
//
//     },
//     {
//         name:'Ira',
//         age: 37,
//     }
// ]
//
// const users= function (array){
//     for (const user of array) {
//         document.write(`<div>${user.name}--${user.age}</div>`)
//     }
// }
// users(arr)


// - створити функцію яка повертає найменьше число з масиву

// let arr= [1,2,3,4,5,6,-1,-3]
//
// function foo(aray) {
//     let min = aray[0];
//     for (const item of aray) {
//       if (item<min){
//           min=item
//       }
//     }
//     return min
// }
// let foo1 =foo (arr)
// console.log(foo1);
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arr=[1,2,3,4,5,6]
// function foo(array) {
//     let sum = 0;
//     for (const item of array){
//         sum+=item
//     }
//     return sum;
// }
//
// console.log(foo(arr));