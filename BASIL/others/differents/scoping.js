



// Array

let menu = ["HOME", "MENU", "CONTACTS"]
let menuItems = ["HOT FOOD", "COLD FOOD", "DRINKS"]
let didUserClick = true

for(let i=0; i<=2; i++){
    console.log(menu[i])
    if (menu[i] == "MENU" && didUserClick){
        for(let i=0; i<=2; i++){
            console.log(" - ", menuItems[i])
        }
    }
}