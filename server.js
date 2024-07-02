const express = require('express');

const db = require("./db")

const app = express();

const bodyParser = require("body-parser")

app.use(bodyParser.json());//req.body

app.get('/',(req,res)=>{
  res.send("welcome to my hotel");
})

const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);


app.listen(7070 , ()=>{
  console.log("port is working on 7070")
})