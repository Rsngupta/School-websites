const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Welcome to the Residential School Backend API');
});

app.get('/api/school-info', (req, res) => {
  res.json({
    name: 'SSVM Residential School',
    established:2019,
    description: 'Shaping the leaders of tomorrow with a focus on academics and overall development.'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



