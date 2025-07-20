'use client';

import { useState, useEffect } from 'react';
import MessageList from '../../components/MessageList';
import { Message } from '../../types';

export default function RecordsPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/messages');
      if (!response.ok) throw new Error('Failed to fetch messages');
      const data = await response.json();
      setMessages(data);
      setError(null);
    } catch (err) {
      setError('Error fetching messages');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDeleteMessage = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3002/api/messages/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete message');
      fetchMessages();
    } catch (err) {
      setError('Error deleting message');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">All Messages</h1>
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}
      <MessageList messages={messages} onDelete={handleDeleteMessage} />
    </div>
  );
}