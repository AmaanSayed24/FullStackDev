const EventEmitter = require('events');
const event = new EventEmitter();
// Define an event handler  
event.on('greet', () => {
    console.log('Hello Event Emitted!');
});
// Register the event handler with the event emitter
event.emit('greet');
// Emit the event