const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, this is my Node.js app running in Docker! Executed by Karthik_IBM');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

