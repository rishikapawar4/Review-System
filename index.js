const express = require('express');
const bodyParser = require('body-parser');
const reviewRoutes = require('./Routes/router');
const cors = require('cors');

const app = express();
const PORT = 3001;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api/reviews', reviewRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
