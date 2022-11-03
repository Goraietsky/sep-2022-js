// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль;
let masiv = [1, 2, true, false, 'user', 'name', 6, 8, true, false]
console.log(masiv[0], masiv[1], masiv[2], masiv[3], masiv[4], masiv[5], masiv[6], masiv[7], masiv[8], masiv[9])

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let object1 = {
    title: 'Book',
    pageCount: 300,
    genre: 'Moto'
}
console.log(object1)
let object2 = {
    title: 'Moto',
    pageCount: 20,
    genre: 'Motosport'
}
console.log(object2)
let object3 = {
    title: 'Java',
    pageCount: 20,
    genre: 'Programing'
}
console.log(object3)

// Cтворити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let book1 = {
    title: 'Okten',
    pageCount: 321,
    genre: 'School',
    authors:[{
        name:'Mark',
        age:23,
    }]

}

console.log(book1);

let book2 = {
    title: 'Okten',
    pageCount: 121,
    genre: 'School',
    authors:[{
        name:'Olena',
        age:22,
    }]

}

console.log(book2);

let book3 = {
    title: 'Okten',
    pageCount: 221,
    genre: 'School',
    authors:[{
        name:'Maks',
        age:21,
    }]

}

console.log(book3);

// Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name:'Vova',sarname:'Gora',password:1111},
    {name:'Vova',sarname:'Gora',password:2111},
    {name:'Vova',sarname:'Gora',password:3111},
    {name:'Vova',sarname:'Gora',password:4111},
    {name:'Vova',sarname:'Gora',password:5111},
    {name:'Vova',sarname:'Gora',password:6111},
    {name:'Vova',sarname:'Gora',password:7111},
    {name:'Vova',sarname:'Gora',password:8111},
    {name:'Vova',sarname:'Gora',password:9111},
    {name:'Vova',sarname:'Gora',password:10111}
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);


