const express = require('express');
const mongoose = require('mongoose');

const app = express();//cria um servidor

mongoose.connect('mongodb+srv://life-invader:life-invader@cluster0-nzin4.mongodb.net/test?retryWrites=true&w=majority',{
  useNewUrlParser:true,
});

app.use(require('./routes'));

app.listen(3333)//ouve uma porta no navegador