
let login = prompt('login: ')
if (login == 'admin'){
    let password = prompt('password: ')
    if (password == "Я главный"){
        alert("Здравствуйте!")
    }
    else {
        alert('Неверный пароль')
    }
} else if ('' || 'Escape'){
    alert('Отменено')
} else {
    alert('Я вас не знаю')
}