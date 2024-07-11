const express = require('express');

const db = require("./db")

require('dotenv').config();

const app = express();

const bodyParser = require("body-parser")

app.use(bodyParser.json());//req.body

const PORT = process.env.PORT || 7070;

app.get('/',(req,res)=>{
  res.send("welcome to my hotel");
})

const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);


app.listen(PORT , ()=>{
  console.log("port is working on 7070")
})