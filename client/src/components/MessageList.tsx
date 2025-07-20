import { Message } from '../types';
import MessageCard from './MessageCard';

interface MessageListProps {
  messages: Message[];
  onDelete: (id: string) => void;
}

export default function MessageList({ messages, onDelete }: MessageListProps) {
  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <MessageCard key={message.id} message={message} onDelete={onDelete} />
      ))}
    </div>
  );
}