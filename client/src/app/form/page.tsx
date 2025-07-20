'use client';

import { useState } from 'react';
import MessageForm from '../../components/MessageForm';

export default function FormPage() {
  const [success, setSuccess] = useState<string | null>(null);

  const handleNewMessage = () => {
    setSuccess('Message submitted successfully!');
    setTimeout(() => setSuccess(null), 3000); // Clear success message after 3 seconds
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Add a Message</h1>
      {success && <p className="text-green-500 text-center mb-4">{success}</p>}
      <MessageForm onMessageAdded={handleNewMessage} />
    </div>
  );
}