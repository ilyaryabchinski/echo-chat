export type MessageType = 'outcoming' | 'incoming';

export interface MessageData {
  message: string;
  type: MessageType;
}
