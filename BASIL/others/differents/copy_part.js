






// copy an array partialy
//
// original = [10, 20, 30, 40, 50]


let original = [10, 20, 30, 40, 50];

let copy = []

for (let i = 1; i < 1 + 3; i++){
    copy[i-1] = original[i]
}
console.log(original)
console.log(copy)

// HW1:
// copy from the even indexes