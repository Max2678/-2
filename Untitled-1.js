// ***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).

let name = "Іван";
let city = name;
console.log(city);

// ***2***
// Який буде результат виконання скрипта?
// let name = "Olga";
// console.log(`привіт ${1}`); //
// console.log(`привіт ${"name"}`); //
// console.log(`привіт ${name}`); // ?

let name2 = "Olga";
console.log(`привіт ${1}`);
console.log(`привіт ${"name2"}`);
console.log(`привіт ${name2}`);

// ***3***
// Видобути число зі змінних
// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";
// вивести в консоль тип

let a = "5";
let b = "13cvb";
let c = "12.9sxdcfgv";

let numA = parseInt(a);
let numB = parseInt(b);
let numC = parseFloat(c);

console.log(typeof numA);
console.log(typeof numB);
console.log(typeof numC);

console.log(numA);
console.log(numB);
console.log(numC);

// ***4***
// Зробіть, щоб 0.1 + 0.2 = 0.3

console.log((0.1 + 0.2).toFixed(1));
console.log(Number((0.1 + 0.2).toFixed(1)));
console.log(Math.round((0.1 + 0.2) * 10) / 10);

// ***5***
// Поверніть найбільше число с набору 20, 10, 50, 40

let numbers = [20, 10, 50, 40];
let maxNumber = Math.max(...numbers);

console.log(maxNumber);

// ***6***
// Поверніть випадкове число в діапазоні від 2 до 4

let randomNumber = Math.floor(Math.random() * 3) + 2;

console.log(randomNumber);

// ***7***
// дізнатись довжину message
// const message = "Welcome to Bahamas!";

const message = "Welcome to Bahamas!";
let messageLength = message.length;

console.log(messageLength);

// ***8***
// вивести в консоль message  великими літерами

const message2 = "Welcome to Bahamas!";
let uppercaseMessage = message2.toUpperCase();

console.log(uppercaseMessage);

// ***9***
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль

let person = {};

person.name = "John";
person.age = 30;
person.city = "New York";

console.log(person);

delete person.city;

person["like flowers"] = true;

console.log(person);

// ***10***
// За допомогою циклу  “for…in” вивести в консоль ключі і значення об*єкта

let person2 = {
    name: "Alice",
    age: 25,
    city: "London",
    isStudent: false
  };

  for (let key in person2) {
    console.log(`Key: ${key}, Value: ${person2[key]}`);
  }