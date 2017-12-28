const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const multer = require('multer');


var app = global.app = express();

var uploader = multer({
  dest: './upload'
})

const uploadCtrl = require('./controllers/upload')

var startServer = () => new Promise((resolve, reject) => {
  app.use(morgan('dev'))
  app.use(bodyParser.json()); // for parsing application/json
  app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
  app.use('/upload', express.static('./upload'));
  app.post('/api/upload', uploader.any(), uploadCtrl.upload)

  app.listen(3000, () => {
    console.log('Server listening on 3000')
  })
})


startServer()