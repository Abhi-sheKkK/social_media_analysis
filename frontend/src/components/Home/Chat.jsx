import React, { useState } from 'react';
import axios from 'axios';

const ChatComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [responseText, setResponseText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setResponseText('');

    try {
      const response = await axios.post(
        'https://social-media-analysis-backend.onrender.com/api/chat', // Replace with your actual backend URL
        {
          input_value: inputValue,
          output_type: 'chat',
          input_type: 'chat',
        },
        {
          headers: {
            'Authorization': 'Bearer Your-Authorization-Token',
            'Content-Type': 'application/json',
          },
        }
      );

      const messageText =
        response.data?.outputs?.[0]?.outputs?.[0]?.results?.message?.data?.text ||
        'No response text found';

      setResponseText(messageText);
      setInputValue(''); // Clear the input after submitting
    } catch (error) {
      console.error('Error making the API request:', error);
      setError('An error occurred while fetching data.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-purple1 mb-6">Chat with AI</h1>
      
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="p-3 w-full border border-gray-300 rounded-md mb-4"
          placeholder="Type something..."
          aria-label="Enter your question or message"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition-colors"
          disabled={isLoading || !inputValue}
          aria-label="Send message"
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </form>

      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md w-full max-w-lg">
          {error}
        </div>
      )}

      {responseText && !isLoading && (
        <div className="mt-6 w-full max-w-lg">
          <h2 className="font-semibold text-lg text-gray-700">Response from AI:</h2>
          <pre className="p-4 bg-gray-100 rounded-md text-gray-800">{responseText}</pre>
        </div>
      )}
    </div>
  );
};

export default ChatComponent;
