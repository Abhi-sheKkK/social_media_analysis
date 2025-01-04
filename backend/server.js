const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors({
    origin: 'http://localhost:5173',  // Replace with your frontend URL
  }));
  
app.use(express.json());


app.post('/api/chat', async (req, res) => {
  const { input_value } = req.body;

  try {
    const response = await axios.post(
      'https://api.langflow.astra.datastax.com/lf/b1444534-75cd-484e-b621-881da671f9f4/api/v1/run/a124521d-9330-405a-bfeb-1493cb0b4dfb?stream=false',
      {
        input_value: input_value,
        output_type: 'chat',
        input_type: 'chat',
      },
      {
        headers: {
          'Authorization': 'Bearer AstraCS:EbPcKzkNQXalxDePkgEcotGy:5c70d41e94c3ad99b2634108387ae0e12c7c930d4bf72c971e52f3e573a29124',
          'Content-Type': 'application/json',
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error('Error making the API request:', error);
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
