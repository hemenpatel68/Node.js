const EventEmitter = require("events");

// Create an event emitter instance
const myEmitter = new EventEmitter();

// Register an event listener
// myEmitter.on("greet", () => {
//   console.log("Hello there!");
// });

// // Emit the event
// myEmitter.emit("greet");

// // Emit event with arguments
// myEmitter.on("userJoined", (username, userId) => {
//   console.log(`${username} (${userId}) has joined the chat`);
// });

// emitter.emit("userJoined", "JohnDoe", 42);

myEmitter.once("connection", () => {
  console.log("First connection established");
});

myEmitter.emit("connection"); // This will trigger the listener
myEmitter.emit("connection"); // This won't trigger the listener again
