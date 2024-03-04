

//* fs,os,path,server
//* btn click 

// Events Module

// Node.js has a built-in module, called "Events"
// where you can create-, fire-, and listen for- your own events.

// Example 1 - Registering for the event to be fired only one time using once.

// Example 2 - create an event emitter instance and register a couple of callbacks

// Example 3 - Registering for the event with callback parameters



const EventEmitter = require("events");

// const fs = require('fs');


const event = new EventEmitter();

event.on('sayMyName', () => {
    console.log('Your name is vinod');
});

event.on('sayMyName', () => {
    console.log('Your name is bhadur');
});

event.on('sayMyName', () => {
    console.log('Your name is thapa');
});

event.on("checkPage",(sc,msg)=>{
   console.log(`status code is ${sc} and page is ${msg}`);
})

// event.emit('sayMyName');
event.emit("checkPage",200,"ok");








