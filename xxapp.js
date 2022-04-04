const EventEmitter = require('events'); // here EventEmitter is a class, which requires a built-in module called events.js
const emitter = new EventEmitter(); // create object

// Register a listener
emitter.on('messageLogged', function(e){  // name of event and callback function when event is called, with passed arguments as 'e'
    console.log('Listener called', e)
})

/*
emitter.on('messageLogged', e => {  // another way of writing callback function
console.log('Listener called', e)
})
*/

//Raise an event (for every request and new connections)
emitter.emit('messageLogged', { // name of event = messageLogged and some arguments to be passed
    id : 1,
    url : 'http://'
}) 


/* Event emitters have 2 main methods
    1. Register a Listener - on()
    2. Raise an event - emit()
*/

/////////////////////////////////////////////////////////////


const http = require('http'); // http - module which consists various classes, methods and events

// createServer() is an EventEmitter
const server = http.createServer((req, res) =>{
    if(req.url==='/'){
        res.write('BASE PAGE');
        res.end();
    }
});

server.listen(3000); // create port 

