import { sendMessage } from 'api/messageApi';
import { Container } from 'components/Container';
import { Heading } from 'components/Heading';
import { Input } from 'components/Input';
import { Messages } from 'components/Messages';
import { MessageData } from 'models/messages';
import React, { ChangeEventHandler, FormEvent, useCallback, useState } from 'react';

export function Main() {
  const [messages, setMessages] = useState<MessageData[]>([]);
  const [inputMessage, setInputMessage] = useState('');

  const onSendMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessages((messages) => [
      ...messages,
      { message: inputMessage, type: 'outcoming' },
    ]);
    try {
      const incomingMessage = await sendMessage(inputMessage);
      setMessages((messages) => [...messages, incomingMessage]);
      setInputMessage('');
    } catch (e) {
      console.error(e);
    }
  };

  const onInputMessageChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      setInputMessage(event.target.value);
    },
    [],
  );

  return (
    <Container>
      <Heading />
      <Messages messages={messages} />
      <form onSubmit={onSendMessage}>
        <Input
          placeholder="Write a reply"
          value={inputMessage}
          onChange={onInputMessageChange}
        />
      </form>
    </Container>
  );
}
