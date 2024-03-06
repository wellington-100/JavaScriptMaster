class User{

    // holds all the User object
    static all = []

    static findByName(name){
        return User.all.find(user => user.name === name)
    }

    //HW: create a static method findByAgeRange()   (10, 20), (null, 20), (10, null)
    static findByAgeRange(minAge, maxAge){
        return User.all.filter(user => {
            if (minAge === null && maxAge !== null){
                return user.age <= maxAge;
            } else if (minAge !== null && maxAge === null){
                return user.age >= minAge;
            } else if (minAge !== null && maxAge !== null) {
                return user.age >= minAge && user.age <= maxAge;
            } else {
                console.log("Incorrect range parameters")
            }
        })
    }

    //-------------------
    constructor(name, age, avatar, online){
        this.name = name
        this.age = age
        this.avatar = avatar
        this.online = online
        this.friends = []
        this.receivedMessages = []
        this.sentMessages = []


        User.all.push(this)
    }

    //------------------------ FRIEND RELATED METHODS ----------------------------------------
    addFriend(user){
        //HW: use a condition to prevent duplicate relathionships
        if(User.all.includes(user)){
            if (this.friends.includes(user)){
                console.log(`${user.name} is already your friend!`)
            } else {
                this.friends.push(user)
                user.friends.push(this)
            }
        } else {
            console.log("No user with this name was found")
        }
    }

    addFriendByName(name){
        let user = User.findByName(name)
        if(User.all.includes(user)){
            if (this.friends.includes(user)){
                console.log(`${user.name} is already your friend!`)
            } else {
                this.friends.push(user)
                user.friends.push(this)
            }
        } else {
            console.log("No user with this name was found")
        }
    }

    findFriendByName(name){
        return this.friends.find(user => user.name === name)
    }

    //HW: add next methods: removeFriend(), removeFriendByName()
    removeFriend(user){
        if(this.friends.includes(user)){
            this.friends = this.friends.filter(user => user !== user)
            user.friends = user.friends.filter(user => user !== this)
        } else {
            console.log("No friend with this name was found")
        }
    }

    removeFriendByName(name){
        let user = User.findByName(name)
        if(this.friends.includes(user)){
            this.friends = this.friends.filter(user => user.name !== name)
            user.friends = user.friends.filter(user => user.name !== this.name)
        } else {
            console.log("No friend with this name was found")
        }
    }


    render(){
        console.log(`
            <${this.name}> ${this.online ? '⦿': '◯'}
        `)
    }   
    
    //------------------------ MESSAGES RELATED METHODS ----------------------------------------
    sendMessage(messageContent, user){
        let message = new Message(messageContent, this, user, null)
        this.sentMessages.push(message)
        user.receivedMessages.push(message)
    }
    
}
