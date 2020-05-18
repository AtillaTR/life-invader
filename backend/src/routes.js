const express = require('express');
const multer = require('multer');
const PostController = require ('./controllers/PostController');
const uploadConfig = require('./config/upload');
const LikeCOntroller = require('./controllers/LikeController');


const routes = new express.Router();
const upload = multer(uploadConfig);//Permite que o express entenda o envio do corpo atraves do insominia no formato mult, part, form, data 



routes.get('/posts',PostController.index);//Retorna todos os posts do feed
routes.post('/posts',upload.single('image'),PostController.store);

routes.post('/posts/:id/like',LikeCOntroller.store);//Rota de likes

module.exports = routes;  