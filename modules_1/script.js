// // es5/common js
// //es6 module
// //inbuilt module

// //eg - 

// const time = "9 am";

// console.log(time);
// console.log(time);

// module.exports = time;

//Event Emitters

const EventEmitter = require('events')
// console.log(EventEmitter)

const celebrity = new EventEmitter()
celebrity.on("New video",() => { //on is a listener
    console.log("Heyy good good")
})

celebrity.emit("New video") //fire an event