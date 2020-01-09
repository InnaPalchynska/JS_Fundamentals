// Task 6
let audiences = [
    {name: 'huge', seats: 20, faculty: 'economy'},
    {name: 'small', seats: 10, faculty: 'philosophy'},
    {name: 'medium', seats: 18, faculty: 'mathematics'},
];

// 1. Вывод на экран всех аудиторий.
function printAudiences (){
     audiences.forEach(item) => {
    console.log(`Аудитория ${item.name} имеет посадочных мест ${item.seats} факультет ${item.faculty}`);
     };

 printAudiences();

// 2. Вывод на экран аудиторий для указанного факультета. 
let audience = audiences.filter(item => item.faculty == 'philosophy');
console.log(audience);

//3. Вывод на экран только тех аудиторий, которые подходят для переданной группы.  
let group =[
    {name: M001, qtyStudent = 15, faculty: 'mathematics'}
]

//4. Функция сортировки аудиторий по количеству мест. 
audiences.sort( (a, b) => a.seats - b.seats );
//5. Функция сортировки аудиторий по названию (по алфавиту).
audiences.sort( (a, b) => a.name - b.name );

// Task 5
let check = [
    {id: 'fish', qty: 3, price: 50},
    {id: 'water', qty: 2, price: 10},
    {id: 'butter', qty: 1, price: 30},
];

// 1. Распечатка чека на экран.
function printCheck (){
    check.forEach(item) => {
    console.log(`Наименование ${item.name} кол-во ${item.seats} цена ${item.faculty}`);
    }
printCheck();

// 2. Подсчет общей суммы покупки.
let sum = 0;
  for (let item of check) {
    sum = qty[item]*price[item];
    sum +=;
  }
  return sum;

// 3. Получение самой дорогой покупки в чеке. 

// 4. Подсчет средней стоимости одного товара в чеке. 
function averageCheck (check) {
    return check.reduce((prev, checkItem) => prev + checkItem.price, 0) / check.length;
  }
  
  alert( averageCheck(arr) );


// Task 4

let shoppingList = [
    {name: 'meat', qty: 4, bought: false},
    {name: 'chease', qty: 2, bought: true},
    {name: 'bread', qty: 1, bought: true},
    {name: 'milk', qty: 3, bought: false},
]

// 1. Вывод всего списка на экран.
shoppingList.sort( (a, b) => a.bought - b.bought );

// 2. Добавление покупки в список.
let product = prompt('Добавить в список покупок', 'milk');
function addProduct (product) {
    if (shoppingList.find(item => item.name == product)) {
       item.qty ++;
    } else {
        shoppingList.push(
            {name: product, qty: 1, bought: false},
        ) 
    }
}

// 3. Покупка продукта.
function purchase (product) {
    if (shoppingList.find(item => item.name == product)) {
       item.bought = true;
    } else {
        alert ("Продукт не найден")
    }
}







