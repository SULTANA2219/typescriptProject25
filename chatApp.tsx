#CreateAChatApplicattion

  import React, {useState, useEffect} from 'react';

interface Message {
  id: number;
  text: string;
  sender: string;
  timestamp: Date;
}

const ChatApp: React FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input. setInput] = useState<string>('');
  const [username, setUsername] = useState<string>('Uset1');

  //Simulate receiving messages (e.g., from a server)
  useEffect(() => {
    //Mock incoming message every 10 seconds
            const interval = setInterval(() => {
              const mockMessage: Message = {
                id: Date.now(),
                text: 'Hello from another user!',
                sender: 'User2',
                timestamp: new Date(),
              };
              setMessages((prev) => [...prev, moc
