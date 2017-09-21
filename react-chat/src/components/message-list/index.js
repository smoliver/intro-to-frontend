/** 
 * Message List
 */

import React from 'react';

import MessageDisplay from 'components/message-display';

const NS = 'message-list--';

export default ({messages, remove, ...rest}) => {
  return (
    <div className={`${NS}container ${rest.className || ''}`}>
      {messages.map ((message, key) => (
        <MessageDisplay {...message} 
          key={key} 
          className={`${NS}message`}
        />
      ))}
    </div>
  )
}