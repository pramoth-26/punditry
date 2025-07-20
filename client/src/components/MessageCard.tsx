import { Message } from '../types';

interface MessageCardProps {
  message: Message;
  onDelete: (id: string) => void;
}

export default function MessageCard({ message, onDelete }: MessageCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-start">
      <div>
        <h3 className="text-lg font-semibold">{message.name}</h3>
        <p className="text-gray-600">{message.comment}</p>
        <p className="text-sm text-gray-400">
          {new Date(message.createdAt).toLocaleString()}
        </p>
      </div>
      <button
        onClick={() => onDelete(message.id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
}