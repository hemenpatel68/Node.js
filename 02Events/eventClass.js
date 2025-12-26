const EventEmitter = require("node:events");

class MyEmitter extends EventEmitter {
  sendMessage(message) {
    console.log("Sending message:", message);
    this.emit("message", message);
  }
}

const myEmitter = new MyEmitter();

myEmitter.on("message", (message) => {
  console.log("Received message:", message);
});

myEmitter.sendMessage("Hello, World!");
