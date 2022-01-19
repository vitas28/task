const express = require('express');
const config = require('config');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use('/api/products', require('./routes/product.routes'));

const PORT = config.get('port') || 5000;

const start = () => {
  app.listen(PORT, () => console.log(`App has been started on port ${PORT}`));
};

start();
