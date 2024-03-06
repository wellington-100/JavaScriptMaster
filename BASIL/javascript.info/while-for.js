// for (let i = 0; i < 3; i++){
//     alert(`number ${i}!`);
// }
//#############
// same with while
let i = 0;
while(i < 3){
    alert(`number ${i}!`)
    i++
}

let num;
num = prompt("Input a number > 100", 0);
while (num !== null && num <= 100) {
    num = prompt("Input a number > 100", 0);
}
//#############
let a = +prompt(`input a number: `)
let n = +prompt(`input a number > ${a}: `)
for (let x = a; x < n; ++x) {
    if (x % x == 0){
        alert(x)
    }
};