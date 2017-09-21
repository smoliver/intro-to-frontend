class Message {
  constructor (message, tag = '') {
    this.message = message;
    this.tag = tag;
    this.time = Date.now ();
    this.edited = false;
  }
}

export default Message;