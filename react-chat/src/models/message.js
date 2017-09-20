class Message {
  constructor (message) {
    this.message = message;
    this.time = Date.now ();
  }
}

export default Message;