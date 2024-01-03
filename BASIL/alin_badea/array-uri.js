let numere = [1, 2, 3, 'patru', false];
console.log(`lungime: ${numere.length}`);

numere[0] = 5;
console.log(numere);

numere[numere.length-1] = true;
console.log(numere);

for (let i = 0; i < numere.length; i++){
    console.log(numere[i])
}
//push - adauga elemente la sfarsitul array-ului
numere.push(7);

//unshift() - adauga un element la inceputul array-ului
numere.unshift(25);
console.log(numere);

let num = numere.shift();
let ultimul = numere.pop();
console.log(numere);
console.log(num, ultimul);

//indexOf() - aflam pozitia unui element in array
let pos = numere.indexOf(2);
console.log(numere, pos);

//splice() - scoate un element/mai multe din array pe baza pozitiei
let elementeScoase = numere.splice(1, 3);
console.log(numere, elementeScoase);

//join()
let arr = ['unu', 'doi', 'trei'];
console.log(arr);

let sir = arr.join(", ");
console.log(sir);

//reverse - inverseaza functia elementelor din array
arr.reverse();
console.log(arr);