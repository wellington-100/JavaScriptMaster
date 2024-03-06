
let clients = ["John","Marry","Kate"]
let clientsHighPriority = ["Tob","Pete"]
let clientsLowPriority = ["Vicky","Lessly"]

while(true){
    let newClient = prompt("Enter the client name...")
    if(newClient === null) {
        break
    }
    let priority = prompt("Chose number of the priority:\n1.Hight Priority\n2.Low Priority")
    if(priority == "1"){
        clientsHighPriority.push(newClient)
    } else if(priority == "2"){
        clientsLowPriority.push(newClient)
    } else {
        alert("Invalid number")
        continue
    }
}

// console.time("ProcesareDate");
// // for(let i = clientsHighPriority.length-1 ; i >= 0 ; i--){
// //      clients.unshift(clientsHighPriority[i])
// //  }
// // for(let i = 0; i < clientsLowPriority.length; i++){
// //      clients.push(clientsLowPriority[i])
// // }
// console.timeEnd("ProcesareDate");
        
let clientsPriorityList = [...clientsHighPriority, ...clients, ...clientsLowPriority]
// let clientsPriorityList = clientsHighPriority.concat(clients, clientsLowPriority)

// function showClients(){
//     for(let i = 0; i< clients.length; i++){
//         console.log(`${i + 1}.${clients[i]}`)
//     }
// }

function showClients() {
    clientsPriorityList.forEach((client, index) => {
        console.log(`${index + 1}.${client}`);
    });
}

showClients()



// 1. Tob
// 2. Pete
// 3. John
// 4. Marry
// 5. Kate
// 6. Vicky
// 7. Lessly