const multer = require('multer');
const path = require('path');

module.exports={
  storage:new multer.diskStorage({
    destination:path.resolve(__dirname,'..','..','uploads'), //Configuracao do destino pra inde os arquivos vao
    filename: function(req,file,callback){  //Nome que vai  utilizar
      callback(null,file.originalname);
    }
  })
};