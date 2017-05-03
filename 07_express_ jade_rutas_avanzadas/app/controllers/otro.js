var express = require('express'),
  router = express.Router();
 

module.exports = function (app) {
  app.use('/', router);
};

router.get('/otro', function (req, res, next) {
	//esto hace referencia a la pagina en view , no es necesario poner el tipo
 	res.render('hola');
});