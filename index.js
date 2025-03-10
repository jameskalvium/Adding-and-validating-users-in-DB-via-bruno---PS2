const express = require('express');
const { resolve } = require('path');
const mongoose = require("mongoose")
const route = require('./routes/auth')
// const User = require('./Models/user.model')
require("dotenv").config()

const app = express();
const port = 3010;

app.use(express.static('static'));
app.use(express.json())

mongoose
  .connect(process.env.MONGO_URL)
  .then(()=>console.log("MONGO DB connected successfully"))
  .catch((err => console.error(err)))



app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.use('/auth',route)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
