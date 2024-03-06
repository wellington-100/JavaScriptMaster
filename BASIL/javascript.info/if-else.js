let officialName = 'ECMAScript';
let yourVariant = prompt('Какое «официальное» название JavaScript?');
if (officialName == yourVariant) {
    alert('Верно!')
} else {
    alert('Не знаете? ' + officialName)
}
// ########################################


// ########################################
let number = prompt("Input a number: ")
let message = (number > 0)? "1":
    (number < 0) ? "-1":
    "0";
alert(message)
// ########################################


// ########################################
let result;
if (a + b < 4) {
    result = 'Мало';
} else {
    result = 'Много';
}

// same with ? operator:
result = (a + b < 4) ? 'Мало' : 'Много';
// ########################################

// ########################################
let message1;
let login = prompt("Кто ты?");
if (login == 'Сотрудник') {
    message1 = 'Привет';
} else if (login == 'Директор') {
    message1 = 'Здравствуйте';
} else if (login == '') {
    message1 = 'Нет логина';
} else {
    message1 = '';
};
alert(message1);

// same with ? operator:
let message2;
let login2 = prompt("Кто ты?");
(login2 == 'Сотрудник') ? message2 = 'Привет':
(login2 == 'Директор') ? message2 = 'Здравствуйте':
(login2 == '') ? message2 = 'Нет логина':
message2 = '';
alert(message2);
// ########################################