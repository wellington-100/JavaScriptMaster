let a = '16';
let b = 8;
console.log(typeof a);
console.log(typeof b);

console.log(a + b); // conversia implicita
console.log(a - b);  // conversia implicita
console.log(a / b);  // conversia implicita
console.log(b - 'trei');  // conversia implicita

let val = b - 'a';
console.log(isNaN(val));// conversia implicita

let val1 = b - '3';
console.log(isNaN(val1), typeof val1);// conversia implicita

//Conversia explicita
//1. conversia de la string la number
//parseInt, parseFloat, Number
a1 = parseInt('8');
b1 = parseFloat('2.5');
console.log(a1 + b1);

let c = Number('25');
console.log(typeof c, c);

let c1 = Number('a25');
console.log(typeof c1, c1); // tipul de date - Number, valoarea - Nan

//2. Conversia la tipul string
//toString, String
let rez = String(123);
rez = String(5.3+2)
console.log(rez, typeof rez);

rez = String(undefined);
console.log(rez); // "undefined"

rez = String(NaN);
console.log(rez); // "Nan"

rez = String(true);
console.log(rez); //"true"

rez = (123).toString();
console.log(rez, typeof rez);

// Conversii la tipul boolean
let result = Boolean('');
console.log(result, typeof result);

result = Boolean(0);
console.log(result, typeof result);

result = Boolean(undefined); 
console.log(result); // false

result = Boolean(null);
console.log(result); // false

result = Boolean(NaN);
console.log(result); // false

result = Boolean('salut');
console.log(result); // true

result = Boolean(10);
console.log(result); // true