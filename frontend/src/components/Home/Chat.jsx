import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const ChatComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { sender: 'user', text: inputValue };
    setChatHistory((prev) => [...prev, userMessage]);

    setIsLoading(true);
    setError(null);
    setInputValue('');

    try {
      const response = await axios.post(
        'https://social-media-analysis-backend.onrender.com/api/chat',
        {
          input_value: inputValue,
          output_type: 'chat',
          input_type: 'chat',
        },
      );

      const messageText =
        response.data?.outputs?.[0]?.outputs?.[0]?.results?.message?.data?.text ||
        'No response text found';

      const aiMessage = { sender: 'ai', text: messageText };
      setChatHistory((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error making the API request:', error);
      setError('An error occurred while fetching data.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8 min-h-screen flex flex-col items-center bg-indigo-50">
      <h1 className="text-4xl font-bold text-purple1 mb-8">Chat with AI</h1>

      <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-xl">
        <div
          className="chat-window h-96 overflow-y-auto mb-6 p-4 bg-gray-100 rounded-lg"
          role="log"
          aria-live="polite"
        >
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={`mb-4 flex ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`px-6 py-3 rounded-lg max-w-lg text-lg shadow-md ${
                  message.sender === 'user'
                    ? 'bg-purple1 text-white'
                    : 'bg-gray-300 text-gray-800'
                }`}
              >
                {message.sender === 'ai' ? (
                  <ReactMarkdown>{message.text}</ReactMarkdown>
                ) : (
                  message.text
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start mb-4">
              <div className="px-6 py-3 rounded-lg bg-gray-300 text-gray-800 text-lg shadow-md">
                Typing...
              </div>
            </div>
          )}
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-grow p-4 border border-gray-300 rounded-l-lg focus:outline-none text-lg"
            placeholder="Type your message..."
            aria-label="Enter your message"
          />
          <button
            type="submit"
            className="bg-purple1 text-white p-4 rounded-r-lg hover:bg-indigo-700 transition-colors text-lg"
            disabled={isLoading || !inputValue.trim()}
            aria-label="Send message"
          >
            {isLoading ? '...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatComponent;
