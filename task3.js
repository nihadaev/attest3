function time() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}

console.log(time())


class Message {
    constructor(author, message){
        this.author = author;
        this.time = gettime();
        this.message = message;
    }
    toHtml(){
        return `${this.time} ${this.author}: ${this.message}`;
    }
}

class Messenger{
    messages = [];

    send(author, text){
        this.messages.push(new Message(author, text));
    }
    show_history(){
        this.messages.forEach(message => {
            return message.toHtml();
        });
    }
}

let messenger = new Messenger();
messenger.send('Nihad', 'hello');
messenger.send('Renar', 'hiii');
messenger.show_history();

const history = document.querySelector('.history')
const name1 = document.querySelector('.name')
const message = document.querySelector('.message')
const btn_send = document.querySelector('.btn-send')
const btn_show = document.querySelector('.btn-show')


btn_send.addEventListener('click', (e) => {
    e.preventDefault();
    let mesaj = message.value
    let person = name1.value
    messenger.send(person,mesaj)

    message.value = ''
    name1.value=''
})

btn_show.addEventListener('click', (e) => {
    e.preventDefault();

    messenger.messages.forEach((message) => {
        const p = document.createElement('p')
        let text = message.toHtml()
        p.textContent = `${text}`
        history.append(p)
    })
})