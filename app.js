const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
require('dotenv').config();

const userRoutes = require('./models/games');

const port = process.env.PORT || 3000;
//general middleware
app.use(morgan('dev'));

//middleware for POST request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//useroutes middleware
app.use('/api/v1/games', userRoutes);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
