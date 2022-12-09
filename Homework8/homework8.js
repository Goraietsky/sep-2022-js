// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User (id,name,surname,email,phone){
//     this.id=id
//         this.name=name
//             this.surname=surname
//                 this.email=email
//                     this.phone=phone
//
// }
// let user1 = new User(1,'Yura','Hora','yura2134d@gmail.com',380673536789);
//
// let user2 = new User(2,'Maks','rora','ura@gmail.com',380674653781);
//
// let user3 = new User(3,'Yura','gora','1ura2134d@gmail.com',380673536789);
//
// let user4 = new User(4,'Vova','tora','rura2134d@gmail.com',380673536789);
//
// let user5 = new User(5,'Stepan','yora','oura2134d@gmail.com',380673536789);
//
// let user6 = new User(6,'Stefan','jora','pura2134d@gmail.com',380673536789);
//
// let user7 = new User(7,'Andriy','kora','iura2134d@gmail.com',380673536789);
//
// let user8 = new User(8,'Ira','nora','gura2134d@gmail.com',380673536789);
//
// let user9 = new User(9,'Maria','bora','yura2134d@gmail.com',380673536789);
//
// let user10 = new User(10,'Yura','tora','t2134d@gmail.com',380673536789);

// let arr=[]
// arr.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10)
// console.log(arr);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let rer = arr.filter((val) => val.id%2 === 0)
// console.log(rer)


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let rer = arr.sort(function (a, b){
//     return a.id-b.id
// })
// console.log(rer)



//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//  class Client {
//      constructor (id, name, surname, email, phone,order) {
//          this.id = id
//          this.name = name
//          this.surname = surname
//          this.email = email
//          this.phone = phone
//          this.order=order
//      }}
// let client1 = new Client(1,'Yura','Hora','yura2134d@gmail.com',380673536789,2);
// let client2 = new Client(2,'Maks','rora','ura@gmail.com',380674653781,3);
// let client3 = new Client(3,'Yura','gora','1ura2134d@gmail.com',380673536789,6);
// let client4 = new Client(4,'Vova','tora','rura2134d@gmail.com',380673536789,6);
// let client5 = new Client(5,'Stepan','yora','oura2134d@gmail.com',380673536789,5);
// let client6 = new Client(6,'Stefan','jora','pura2134d@gmail.com',380673536789,1);
// let client7 = new Client(7,'Andriy','kora','iura2134d@gmail.com',380673536789,123);
// let client8 = new Client(8,'Ira','nora','gura2134d@gmail.com',380673536789,123);
// let client9 = new Client(9,'Maria','bora','yura2134d@gmail.com',380673536789,321);
// let client10 = new Client(10,'Yura','tora','t2134d@gmail.com',380673536789,756);
//
//
// let arr1=[]
// arr1.push(client1,client2,client3,client4,client5,client6,client7,client8,client9,client10)
// console.log(arr1);




// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// const rer = arr1.sort((a, b) => a.order.length-b.order.length)
// console.log(rer)
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model,producer,year,maxSpeed,engine) {
//     this.model = model
//     this.producer = producer
//     this.year = year
//     this.maxSpeed = maxSpeed
//     this.engine = engine
//
//     this.engine = function () {
//         console.log((`їдемо зі швидкістю ${this.maxSpeed} на годину`));
//     }
//     this.info = function () {
//         for (const carKey in this) {
//             if (typeof this[carKey] !== 'function'){
//                 console.log(`${carKey}'-- ${this[carKey]}`);
//             }
//                 }
//
//     }
//     this.increaseMaxSpeed= function (newSpeed) {
//         this.maxSpeed += newSpeed
//     }
//     this.changeYear=function (newValue) {
//         this.year =newValue
//     }
//     this.addDriver=function (driver) {
//         this.driver = driver;
//     }
// }
//
// const car = new Car('BMW','Germany','2022',360,'4.4Bturbo');
// console.log(car);
// car.engine()
//  car.info()
// car.increaseMaxSpeed(385);
// car.changeYear(2023);
// car.addDriver({name:'Yura'})
// console.log(car);
// //
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car{
// constructor (model,producer,year,maxSpeed,Carengine) {
//     this.model = model
//     this.producer = producer
//     this.year = year
//     this.maxSpeed = maxSpeed
//     this.Carengine = Carengine
// }
//     engine () {
//         console.log((`їдемо зі швидкістю ${this.maxSpeed} на годину`));
//     }
//     info() {
//         for (const carKey in this) {
//             if (typeof this[carKey] !== 'function'){
//                 console.log(`${carKey}'-- ${this[carKey]}`);
//             }
//         }
//
//     }
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed
//     }
//    changeYear(newValue) {
//         this.year =newValue
//     }
//     addDriver(driver) {
//         this.driver = driver;
//     }
// }
//
// const car = new Car('BMW','Germany','2022',360,'4.4Bturbo');
// console.log(car);
// car.engine()
// car.info()
// car.increaseMaxSpeed(385);
// car.changeYear(2023);
// car.addDriver({name:'Yura'})
// console.log(car);
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Cinderella(name,age,footSize) {
    this.name=name
    this.age=age
    this.footSize=footSize
}

const Cinderella1=new Cinderella('Tanya', 23, 35);
const Cinderella2=new Cinderella('Anya', 23, 36);
const Cinderella3=new Cinderella('Vanya', 23, 37);
const Cinderella4=new Cinderella('Danya', 23, 38);
const arrayofCinderella = [];
arrayofCinderella.push(Cinderella1,Cinderella2,Cinderella3,Cinderella4)

class Prince{
    constructor(name,age,findFootSize) {
        this.name=name
        this.age=age
        this.findFootSize=findFootSize
    }
}

const prince = new Prince('Yura', 30, 36);
const fibdCinderellas=(arr,boy)=>{
    for (const item of arr) {
        if(item.footSize === boy.findFootSize){
            console.log(`My cinderella is ${item.name}`);
        }
    }
}

fibdCinderellas(arrayofCinderella, prince);

let find =arrayofCinderella.find(value => value.footSize === prince.findFootSize);
console.log(find);