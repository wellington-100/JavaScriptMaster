




// forward / backward steeping / iteration

let food = [
    "pizza",    // 0
    "salad",    // 1
    "soup",     // 2
    "polenta",  // 3
    "wok",      // 4
    "shrimps"   // 5
]

let start = 1
let items = 3
console.log("+-------------------+")
for (let i = start; i < start + items; i++){
    console.log("|                   |")
    let spaces = 12 -food[i].length
    console.log(`|     "${food[i]}"${" ".repeat(spaces)}|`)
    console.log("|                   |")
}
console.log("+-------------------+")

// HW1: make changes so your algo steps backward from end 3 items up