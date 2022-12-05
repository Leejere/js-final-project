import express from 'express';

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello from your server');
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});