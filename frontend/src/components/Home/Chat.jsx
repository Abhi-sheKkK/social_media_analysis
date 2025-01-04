import { useState, useEffect } from 'react';

const ChatWidget = ({ chatInputs, chatInputField, flowId, hostUrl }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!message.trim()) return; // Don't send empty messages

    // Display the user's message
    const newMessage = { text: message, isUser: true };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setMessage('');
    
    // Show bot's loading state
    setIsLoading(true);
    
    // Simulate an API call to get bot's response (replace with real API logic)
    setTimeout(() => {
      const botResponse = {
        text: "This is a bot response. Replace with API call logic!",
        isUser: false,
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
      setIsLoading(false);
    }, 1500); // Simulating a delay for the bot response
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  useEffect(() => {
    // Scroll to the bottom when a new message is added
    const chatWindow = document.getElementById('chat-window');
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }, [messages]);

  return (
    <div className="w-80 bg-white shadow-lg rounded-lg p-4 flex flex-col">
      <div
        id="chat-window"
        className="flex-1 overflow-y-auto space-y-4 p-2 max-h-96"
      >
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`flex items-center space-x-2 ${msg.isUser ? 'flex-row-reverse' : ''}`}
            >
              <div
                className={`w-8 h-8 rounded-full ${msg.isUser ? 'bg-indigo-600' : 'bg-gray-600'}`}
              >
                {/* Avatar (can replace with actual avatar image URL) */}
              </div>
              <p
                className={`p-2 rounded-lg max-w-xs ${msg.isUser ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-black'}`}
              >
                {msg.text}
              </p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-600"></div>
              <p className="p-2 bg-gray-200 text-black rounded-lg max-w-xs">
                Typing...
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Input area */}
      <div className="flex gap-2 mt-4">
        <input
          type="text"
          value={message}
          onChange={handleChange}
          className="border rounded-lg p-2 w-full"
          placeholder="Type a message"
        />
        <button
          onClick={handleSendMessage}
          className="bg-indigo-600 text-white rounded-lg p-2"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWidget;
