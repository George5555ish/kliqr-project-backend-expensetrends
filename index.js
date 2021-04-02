const express = require('express');
const mysql = require('mysql');
const mysql2 = require('mysql2');
const cors = require('cors');

const app = express();

const transactionRoute = require('./routes/transactionRoute');
const userRoute = require('./routes/userRoute');
require('dotenv').config();

app.use(express.json());
app.use(cors());

const db = mysql2.createConnection({
    user: 'sql10402904',
    host: 'sql10.freemysqlhosting.net',
    password: 'pqiZUFlieb',
    database: 'sql10402904',
    port:3306

});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  app.use('/transactions', transactionRoute);
  app.use('/user', userRoute);

app.get('/', (req, res)=> res.send('Get request successful!'));


app.listen(3000, (req, res)=> console.log('Server started!'));