import express from 'express';
import connectToDB from './config/db';

connectToDB();

const app = express();
const port = 3000;

app.get('/login', (req, res) => {
  res.send('One day you will actually have to log in!');
});

app.get('/bugs', (req, res) => {
  res.json({
    name: 'First Bug',
    description: 'Very nasty bug',
    id: 3
  });
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});