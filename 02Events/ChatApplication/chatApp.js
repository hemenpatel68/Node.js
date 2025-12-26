const EventEmitter = require("node:events");

class ChatApp extends EventEmitter {
  constructor() {
    super();
    this.user = new Set();
  }

  userJoined(user) {
    this.user.add(user);
    this.emit("userJoined", user);
  }

  sendMessage(user, message) {
    if (this.user.has(user)) {
      this.emit("sendMessage", user, message);
    } else {
      console.log(`${user} is not present in the chat`);
    }
  }

  userLeft(user) {
    if (this.user.has(user)) {
      this.user.delete(user);
      this.emit("userLeft", user);
    } else {
      console.log(`${user} is not present in the chat`);
    }
  }
}

module.exports = ChatApp;
