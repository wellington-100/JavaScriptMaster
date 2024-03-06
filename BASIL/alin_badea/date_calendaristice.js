let data = new Date();
console.log(data, typeof data)

let data2 = Date();
console.log(data2, typeof data2)

let data3 = new Date(2021, 2, 15);
console.log(data3);

console.log(Date.now()); // numar de milisecunde de la 1 ianuarie 1970

console.log(Date.parse(data2));

console.log(Date.parse('2018-07-23 15:23:48'));

let data4 = new Date("2020-8-11 10:35:27");
//anul:
console.log(data4.getFullYear());

//luna:
console.log(data4.getMonth());

//ziua din saptamana:
console.log(data4.getDay());

//ziua lunii:
console.log(data4.getDate());

//setDate - schimbam ziua lunii:
data4.setDate(25);
console.log(data4.toLocaleString());
console.log(data4.toLocaleTimeString());

let diff = data3 - data4;
console.log(diff/(1000*60*60*24*365)); // convertirea din ani in milisecunde