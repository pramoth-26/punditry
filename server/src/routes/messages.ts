import { Router } from 'express';
import fs from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const router = Router();
const messagesFile = path.join(__dirname, '../data/messages.json');

interface Message {
  id: string;
  name: string;
  comment: string;
  createdAt: string;
}

async function readMessages(): Promise<Message[]> {
  try {
    const data = await fs.readFile(messagesFile, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function writeMessages(messages: Message[]): Promise<void> {
  await fs.writeFile(messagesFile, JSON.stringify(messages, null, 2));
}

router.get('/', async (req, res) => {
  const messages = await readMessages();
  res.json(messages);
});

router.post('/', async (req, res) => {
  const { name, comment } = req.body;
  if (!name || !comment) {
    return res.status(400).json({ error: 'Name and comment are required' });
  }

  const messages = await readMessages();
  const newMessage: Message = {
    id: uuidv4(),
    name,
    comment,
    createdAt: new Date().toISOString(),
  };

  messages.push(newMessage);
  await writeMessages(messages);
  res.status(201).json(newMessage);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const messages = await readMessages();
  const filteredMessages = messages.filter((message) => message.id !== id);

  if (messages.length === filteredMessages.length) {
    return res.status(404).json({ error: 'Message not found' });
  }

  await writeMessages(filteredMessages);
  res.json({ message: 'Message deleted' });
});

export default router;