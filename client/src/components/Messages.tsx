import { MessageData } from 'models/messages';
import React from 'react';

import { Message } from './Message';

interface MessagesProps {
  messages: MessageData[];
}

export function Messages({ messages }: MessagesProps) {
  return (
    <div className="flex flex-col mx-2 grow overflow-y-auto">
      {messages.map((message, index) => (
        <Message
          key={`${message.message}-${index}`}
          type={message.type}
          message={message.message}
        />
      ))}
    </div>
  );
}
