



// HW1:
// copy from the even indexes

let original = [10, 20, 30, 40, 50, 60, 70];

let copy = []

for (let i = 0; i < original.length; i++){
    if (i % 2 == 0){                                // for odd indexes: if (i % 2 == 1) <---- HW2
     copy.push(original[i])
    };
}
console.log(original);
console.log(copy);


// HW3:
// copy copy in descending order

let original = [10, 20, 30, 40, 50, 60, 70];

let copy = []
for (let i = original.length -1; i >= 0; i--){                            
     copy.push(original[i])
}
console.log(original);
console.log(copy);