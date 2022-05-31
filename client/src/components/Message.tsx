import { MessageType } from 'models/messages';
import React from 'react';

interface MessageProps {
  message: string;
  type: MessageType;
}

const incomingMessageClasses = 'rounded-t-full rounded-br-full self-start';
const outcomingMessageClasses = 'rounded-t-full rounded-bl-full self-end';

export function Message({ message, type }: MessageProps) {
  const messageClasses =
    type === 'incoming' ? incomingMessageClasses : outcomingMessageClasses;

  return (
    <div className={`p-2 bg-slate-100 shadow-md my-1 ${messageClasses}`}>{message}</div>
  );
}
