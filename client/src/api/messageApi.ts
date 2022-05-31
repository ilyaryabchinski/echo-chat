import { MessageData } from 'models/messages';

export async function sendMessage(message: string): Promise<MessageData> {
  const response = await fetch('http://localhost:8080/message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
    mode: 'cors',
  });
  const { message: messageRecieved } = await response.json();

  return { message: messageRecieved, type: 'incoming' };
}
