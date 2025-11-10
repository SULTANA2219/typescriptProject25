#developAconversetionalAIchatbot

  //ChatBot.tsx
  import React, {useState} from 'react';

//Simple AI responses based on keywords (expandable)
const getAIResponses = (userInput: string): string => {
  const input = userInput.toLowerCase();
  if(input.includes('hello') || input.includes('hi')){
    return 'Hello! How can I help you today?';
  } else if(input.includes('how are you?')) {
    return 'I\'m doing well, thank you! What about you?';
  } else if(input.includes('bye') || input.includes('goodbye')) {
    return 'Goodbye! Have a great day!';
  } else if(input.includes('weather')) {
    return 'I\'m not connected to a weather service, but I hope it\'s nice where you are!';
  } else if(input.includes('joke')) {
    return 'Why don\'t scientists trust atoms? Because they make up everything!';
  } else {
    return 'I\'m sorry, I didn\'t understand that. Can you rephrase?';
  }
};

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: 'user' | 'bot'; text: string }[]>([
    { sender: 'bot', text: 'Hi! I\'m a simple AI chatbot. Ask me anything!' },
    ]);
  const [input, setInput] = useState<string>('');

  const sendMessage = () => {
    if(input.trim()) {
      const userMessage = { sender: 'user' as const, text: input };
      setMessages((prev) => [...prev, userMessage]);

    //Simulate AI response
    const botResponse = { sender: 'bot' as const, text: getAIResponse(input) };
      setTimeout(() => {
        setMessages((prev) => [...prev botResponse]);
      }, 500); //Delay for realism

    setInput('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => 
    if(e.key === 'Enter') {
    sendMessage();
  }
};

return (
  <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }} >
  <h1>Conversational AI Chatbot</h1>
    <div
      style={{
        height: '300px',
        border: '1px solid #ccc',
        overflowY: 'scroll',
        padding: '10px',
        marginBottom: '10px',
      }}
      >
      {messages.map((msg, index) => (
        <div
          key={index}
          style={{
            textAlign: msg.sender === 'user' ? 'right' : 'left',
            marginBottom: '10px',
          }}
          >
          <strong>{msg.sender === 'user' ? 'You' : 'Bot'}</strong>{msg.text}
        </div>
        <div 
        <input 
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
      placeholder="Type your message..."
      style={{ width: '80%', padding: '5px' }}
      />
      <button onClick={sendMessage}
        style={{ marginLeft: '10px' }}>
        Send
      </button>
    </div>
  </div>
  );
};

export default Chatbot;
