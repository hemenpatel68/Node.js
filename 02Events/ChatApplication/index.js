const ChatApp = require("./chatApp.js");

const chat = new ChatApp();

chat.on("userJoined", (user) => {
  console.log(`${user} has joined the chat.`);
});

chat.on("sendMessage", (user, message) => {
  console.log(`${user} : ${message}`);
});

chat.on("userLeft", (user) => {
  console.log(`${user} was left the chat.`);
});

chat.userJoined("Shital");
chat.userJoined("Jhon");

chat.sendMessage("Shital", "Hello, I am Shital.");
chat.sendMessage("Jhon", "Hello, I am Jhon.");

chat.userLeft("Shital");

chat.sendMessage("Shital", "Hello, I am Shital.");
