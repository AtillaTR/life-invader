const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();//cria um servidor

const server = require('http').Server(app);//Divide o servidor pra conectar tanto com http quanto web socket 
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://life-invader:life-invader@cluster0-nzin4.mongodb.net/test?retryWrites=true&w=majority',{
  useNewUrlParser:true,
});//conexao com o DB

app.use((req,res,next)=>{
  req.io=io;      //Permite o envio de info. em tempo real do .io para todas as rotas 

  next();
})

app.use(cors());//Permite que todos os enderecos de diferentes servidores possam acessar o backend

app.use('/files',express.static(path.resolve(__dirname,'..','uploads','resized')));//Rota para acessar arquivos estaticos(imagens) que fez upload

app.use(require('./routes'));//cria um segundo arquivo de rotas para configurar as rotas da aplicacao

server.listen(3333)//ouve uma porta no navegador