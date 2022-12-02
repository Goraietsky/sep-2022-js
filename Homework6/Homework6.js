// Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world';
// console.log(str1.length);
// let str2 = 'lorem ipsum';
// console.log(str2.length);
// let str3 = 'javascript is cool';
// console.log(str3.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world';
// console.log(str1.toUpperCase());
// let str2 = 'lorem ipsum';
// console.log(str2.toUpperCase());
// let str3 = 'javascript is cool';
// console.log(str3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str1 = 'HELLO WORLD';
// console.log(str1.toLowerCase());
// let str2 = 'LOREM IPSUM';
// console.log(str2.toLowerCase());
// let str3 = 'JAVASCRIPT IS COOL';
// console.log(str3.toLowerCase());



// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str.length);
// let trim = str.trim();
// console.log(trim);
// console.log(trim.length);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні';
// let split = str.split(' ');
// console.log(split);


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let arr =[10,8,-7,55,987,-1011,0,1050,0]
// let map = arr.map(value =>value.toString());
// console.log(map);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// // sortNums(nums,'ascending') // [3,11,21]
// // sortNums(nums,'descending') // [21,11,3]
// const sortNums=(direction,arr) =>{
//     if (direction === 'ascending'){
//         arr.sort((a, b) =>a-b)
//     }else if (direction === 'descending') {
//         arr.sort((a, b) => b - a)
//     }
//     return arr;
// }
//
// console.log(sortNums('descending', nums));


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
    // {title: 'Python Complex', monthDuration: 6},
    // {title: 'QA Complex', monthDuration: 4},
    // {title: 'FullStack', monthDuration: 7},
    // {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// console.log(coursesAndDurationArray.sort((a, b) =>
//     b.monthDuration - a.monthDuration));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));


// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
const suits=[
    { cardSuit:'heart', color:'red'},
    { cardSuit:'diamond', color:'red'},
    { cardSuit:'spade', color:'black'},
    { cardSuit:'clubs', color:'black'},
]
const duits=[]

const cardNames=[6,7,8,9,10,'ace','jack','queen','king','joker']

for (const suit of suits) {
    for (let cardName of cardNames) {
        const card = {
            cardSuit: suit.cardSuit,
            value: cardName,
            color: suit.color
        }
      duits.push(card)
    }
}
duits.push({ cardSuit: 'joker',value:null,color:'red',}),
    duits.push({ cardSuit: 'joker',value:null,color:'black',})
console.log(duits);


// - знайти піковий туз

// let filter=duits.filter(value => value.cardSuit === 'spade' && value.value === 'king')
// console.log(filter);

// - всі шістки
// let filter=duits.filter(value =>  value.value === 6)
// console.log(filter);
// - всі червоні карти
// let filter=duits.filter(value => value.color === 'red')
// console.log(filter);

// - всі буби
// let filter=duits.filter(value => value.cardSuit === 'diamond')
// console.log(filter);
// - всі трефи від 9 та більше
// let filter=duits.filter(value => (value.cardSuit === 'clubs' && value.value >= 9) ||
//     (value.cardSuit === 'clubs' && typeof value.value === 'string'))
// console.log(filter);



// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduce = duits.reduce((acumulator, value) => {
    if (value.cardSuit === 'spade') {
        acumulator.spades.push(value)
    } else if (value.cardSuit === 'diamond') {
        acumulator.diamonds.push(value)
    } else if (value.cardSuit === 'heart') {
        acumulator.hearts.push(value)
    } else if (value.cardSuit === 'clubs') {
        acumulator.clubs.push(value)
    }
    return acumulator
},
{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
})
console.log(reduce);