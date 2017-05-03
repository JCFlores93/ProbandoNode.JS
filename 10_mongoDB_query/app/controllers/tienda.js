	/*importamos express*/
var express = require('express'),
/*Administrar ls rutas*/
	router  = express.Router(),

	/*Aministrar la BD*/
	mongoose = require('mongoose'),
	/*importamos un modelo llamado modelo*/


	Camisetas = mongoose.model('camisetas');



	module.exports = function(app){
		app.use('/', router);
	};

	router.get('/tienda', function (req,res,next){
			debugger;
		Camisetas.find({color : "Naranja"}).toArray(function(err, camisetas){
			if(err) return next(err);

			res.render('tienda',{
				titulo :'Tienda de Camisetas',
				camisetas : camisetas
			});
		});
	});	