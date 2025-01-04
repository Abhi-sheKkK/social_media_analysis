import React, { useState } from 'react';
import axios from 'axios';

const ChatComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [responseText, setResponseText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://your-backend-name.onrender.com/api/chat', // Replace with your actual backend URL
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

      // Extract the message text from the response
      const messageText =
        response.data?.outputs?.[0]?.outputs?.[0]?.results?.message?.data?.text || 'No response text found';

      // Set the message text in state
      setResponseText(messageText);
    } catch (error) {
      console.error('Error making the API request:', error);
      setResponseText('An error occurred while fetching data.');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Chat with AI</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-full"
          placeholder="Type something..."
        />
        <button
          type="submit"
          className="mt-4 p-2 bg-blue-500 text-white rounded-md w-full"
        >
          Send
        </button>
      </form>

      {responseText && (
        <div className="mt-6">
          <h2 className="font-bold text-lg">Response from AI:</h2>
          <pre className="p-4 bg-gray-100 rounded-md">{responseText}</pre>
        </div>
      )}
    </div>
  );
};

export default ChatComponent;
