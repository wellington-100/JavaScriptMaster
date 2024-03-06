



class User{
    constructor(name, age, online){
        this.name = name
        this.age = age
        this.online = online
    }
    render(){
        console.log(`
            <${this.name}> ${this.online ? '⦿': '◯'}
        `)
    }    
}

let user_1 = new User('johny', 20, true)
let user_2 = new User('marry', 21, false)
let user_3 = new User('pete', 22, true)




class Message{
    constructor(content, status, from_user, to_user){
        this.content = content,
        this.status = status,
        this.from_user = from_user,
        this.to_user = to_user
    }
    render(){
        console.log(`
            | From: ${this.from_user.name}
            | Message to ${this.to_user.name}:  ${this.content}
            | Status: ${this.status == 'sent' ? '✅':  '✈'}

        `)
    }
}

let message_1 = new Message('Hi!', 'pending', user_1, user_2)
let message_2 = new Message('Hello World!', 'sent', user_3, user_1)






///!!!!!!!!!!!!!
// HW: difine a class Message
// HW: diagrams
// let message_1 = {
//     content: 'Hi, how are you?',
//     status: 'sent',
//     from_user: user_1,
//     to_user: user_2,
// }

// // literal / simple objects

// // NOTE!!! this isn't a class!!!
// let User = {
//     prototype: {
//         render: function(){
//             console.log(`
//                 <${this.name}> ${this.online ? '⦿': '◯'}
//             `)
//         }
//     }
// }


// let user_1 ={
//     name: 'johny',
//     age: 20,
//     online: true,
// }

// let user_2 ={
//     name: 'marry',
//     age: 21,
//     online: false,  
// }

// let user_3 ={
//     name: 'pete',
//     age: 21,
//     online: false,  
// }

// // set the correct prototype
// Object.setPrototypeOf(user_1, User.prototype)
// Object.setPrototypeOf(user_2, User.prototype)
// Object.setPrototypeOf(user_3, User.prototype)



