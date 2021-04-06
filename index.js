const express = require('express');

const cors = require('cors');

let db = require('./db');
const app = express();


db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

const transactionRoute = require('./routes/transactionRoute');
const userRoute = require('./routes/userRoute');
require('dotenv').config();

app.use(express.json());
app.use(cors());



  app.use('/transactions', transactionRoute);
  app.use('/user', userRoute);

// app.get('/', (req, res)=> res.send('Get request successful!'));


app.listen(3000, (req, res)=> console.log('Server started!'));
