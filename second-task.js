// Порівняння типів даних:
// Порівняти два значення (наприклад, число та рядок) на рівність і перевірити, чи вони рівні й за типом, і за значенням. Використовувати оператори строгого порівняння ===, та порівняння з приведенням до типу ==. Подивитись на їх поведінку. Спробуйте порівняти boolean і null. null і 0. Тут можете трохи поекспериментувати з типами ;)

let age = 23;
let stringAge = "23";

let isStudent = true;
let number = 1;

let nullValue = null;
let zeroValue = 0;
let undefinedValue = undefined;

console.log(age == stringAge); // true
console.log(age === stringAge); // false

console.log(isStudent == number); // true
console.log(isStudent === number); // false

console.log(isStudent == nullValue); // false (null равен только undefined)
console.log(isStudent === nullValue); // false
console.log(nullValue == zeroValue); // false (null равен только undefined)

console.log(nullValue === zeroValue); // false

console.log(undefinedValue == nullValue); // true
console.log(undefinedValue === nullValue); // false
