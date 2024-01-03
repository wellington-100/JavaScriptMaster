let nume = 'Voicu';
let prenume = 'Maria';
let numeComplet = `Voicu Maria`;

console.log(nume[1]);

nume[0] = 'x';
console.log(nume);

//length = lungimea unui sir
console.log(numeComplet.length);

// +, += --> operatori de concatinare
console.log('lungime: ' + numeComplet.length);

//indexOf()
console.log(nume.indexOf('m')>-1);

//substring()
console.log(numeComplet.substring(2,5));

//substr
console.log(numeComplet.substr(2,5))

//includes()
console.log(numeComplet.includes('aria'));

//replace
let sir = 'apostrof, ghilimele, tab';
sir = sir.replace('apo', 'xxx');
console.log(sir)

//split
let arr = sir.split(',')
console.log(arr);

//trim
let val = '  doi  ';
console.log(val, val.trim(), val.trim().length);

let sir2 = 'gili"mele" in sir'
let sir3 = 'gili\"mele\" in sir'
console.log(sir2, sir3);

//secvente escape:
// \', \", \\, \n, \r, \t, \v

let sir4 = "apostrof\', ghilimele\", newLine\n, bascklash\\, tab\t, vtab\v";
console.log(sir4);

// let template = 'salut. ' +
//                 'acesta este un sir foarte lung ' +
//                 'pentru a testa sabloane'

let template = `salut ${nume}.
acesta este un sir foarte lung
pentru a testa sabloane`
console.log(template);
