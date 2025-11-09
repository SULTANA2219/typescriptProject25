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
              setMessages((prev) => [...prev, mockMessage]);
            }, 10000);
    return () => clearInterval(interval);
  }, []);

  const sendMessage = () => {
    if(input.trim()) {
      const newMessage: Message = {
        id: Date.now(),
        text: input,
        sender: username,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev. newMessage]);
      setInput('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if(e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h1>Simple Chat App</h1>
      <div style={{ marginBottom: '10px' }}>
        <label>Username: </label>
        <input 
          type="text"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)}
          style={{ margiLeft: '10px' }}
          />
      </div>
      <div 
        style= {{
          height: '300px',
          border: '1px so
      
