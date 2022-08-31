var url = 'http://mylogger.io/log' // standin for http endpoint

const EventEmitter = require('events');
class Logger extends EventEmitter{
    start() {
        this.on('messageLogged', (message) => console.log("Message Logged:", message))
    }

    log(message) {
        this.emit('messageLogged', message)
    }
}

module.exports = Logger;