
class Message{

    static all = []

    constructor(content, fromUser, toUser, status){
        this.content = content,
        this.fromUser = fromUser,
        this.toUser = toUser,
        this.status = status
        Message.all.push(this)
    }
    render(){
        console.log(`
            | From: ${this.fromUser.name}
            | Message to ${this.toUser.name}:  ${this.content}
            | Status: ${this.status == 'sent' ? '✅':  '✈'}

        `)
    }
}