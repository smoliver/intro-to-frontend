import React from 'react';

import MessageList from 'components/message-list';
import Editor from 'components/editor';

import Message from 'models/message';

const NS = 'app--'

class App extends React.Component {
  constructor (props) {
    super (props)

    this.props.messages.on ('child_added', this.onRemoteMessageAdded.bind (this));
    this.props.messages.on ('child_changed', this.onRemoteMessageChanged.bind (this));
    this.props.messages.on ('child_removed', this.onRemoteMessageChanged.bind (this));

    this.state = {
      messages : [],
      displayFilter : ((val) => val)
    }
  }

  setDisplayFilter (filter) {
    this.setState ({
      displayFilter: filter
    });
  }

  onRemoteMessageAdded (data) {
    this.setState ({
      messages: [...this.state.messages, {...data.val (), key: data.key}]
    });
  }

  onRemoteMessageChanged (data) {

  }

  onRemoteMessageRemoved (data) {

  }

  removeMessage (key) {
    const messages = this.state.messages;
    this.props.messages.child (key).remove ();
    const deleteIdx = messages.findIndex ((message) => message.key === key);

    this.setState ({
      messages: [
        ...messages.slice (0, deleteIdx), 
        ...messages.slice (deleteIdx + 1, messages.length)
      ]
    })
  }


  addMessage (messageText) {
    // Ensures that only filled messages are created
    if (messageText == undefined || messageText === '') return;

    // Create a new message object
    const message = new Message (messageText);

    // Add it to the firebase database
    const messageRef = this.props.messages.push (message);
    messageRef.set (message);

    // Add it to the state messages array, with its corresponding firebase key
    this.setState ({
      messages: [...this.state.messages, {...message, key: messageRef.key}]
    });
  }

  render () {
    const displayMessages = this.state.displayFilter (this.state.messages);
    return (
      <div className={`${NS}container`}>
        <MessageList 
          className={`${NS}message-list`} 
          messages={displayMessages} 
        />
        <Editor onSubmit={this.addMessage.bind (this)}/>
      </div>
    );
  }
}

export default App;