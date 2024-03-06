
//-----------------------------------------------------
let numar = 3;
console.log(typeof numar);
numar = 'patru';
console.log(typeof numar); // operatorul typeof - verificam tipul variabilei

// string
let nume2 = 'ion popescu';
console.log(typeof nume2);

//number
let varsta = 17;
console.log(typeof varsta);

//boolean
let major = true;
console.log(typeof major);

//null
let message1 = null;
console.log(typeof message1);

//undefined
let test;
console.log(test, typeof test);

//Symbol
let sim = Symbol();
console.log(typeof sim);

//Tipuri referita
//array, obiecte, functii, date calendaristice
//orice alta valoare care nu este de tip primitiv
let numere1 = [1, 2, 3];
console.log(typeof numere1);

let adresa = {
    oras: 'Timisoara',
    judet: 'Timis'
};
console.log(typeof adresa, adresa);