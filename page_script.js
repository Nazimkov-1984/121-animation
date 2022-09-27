// 1)типи данних
// 7 типів данних  - number, string, boolean, array, object, bigInt, symbol

// '150' - String
// 2, 4, 2.5 - Number
// true/false -  Boolean / логічний тип 
// [2, 5 , 145, 455, 'sdfsdfs', false, true]   Array 'массив'
// {name: "Kolya", age: 25} Object "об'єкт"
// 3215465464546546546546545454 - BigInt 'велике ціле число'

//  2 + 2  = 4 
//  'a' + 'b' = 'ab'
// 5 + 10 = 15
//  '5' + '10' = '510'

// 2) змінні ("переменные")
// const first = 10
// const second = 20
// let firstNumber
// let secondNumber
// let result
// console.log('Результат додавання',first,'+', second, ':', result, 'кг')

// firstNumber = prompt('Введіть перше число')
// secondNumber = prompt("Введіть друге число")
// result = firstNumber / '2'
// console.log(result)
// NaN - not a number

// функції 

// console.log()
// alert()
// prompt()
// вбудована функція - 
// на цьому рядку ми визиваємо функцію (або запускаємо)
// () - сюди ми передаємо параметри тобто вхідні данні для роботи функції

function getSummTwoNumbers (a, b, c) {
    // тіло функції 
    const result = (a + b) / c
    console.log(result)
}

getSummTwoNumbers(10, 20, 5)

// умови - це виконання певних дій в залежності від певних умов

// умовний оператор if - "якщо...", else - "інакше..."
// якщо ім'я користувача довше ніж три літери то вивести напис "довге ім'я"
// якщо ім'я користувача коротше ніж три літери то вивести напис "коротке ім'я"

// const name = "Ян"
// if (name.length > 3) {
//     if(name.length > 10) {
//         console.log(" дуже довге ім'я")
//     } else {
//         console.log("довге ім'я")
//     }
// } else {
//      console.log("коротке ім'я")   
// }
// оператори порівняння 
// > - більше
// < - менше
// >= - більше або дорівнює
// <=  - менше або дорівнює
// == - не строге порівняння (ми порівнюємо лише значення)
// === - строге порівняння

// && - та
// || - або

const a = 5
const b = "5"

