var express = require('express');
var fs = require('fs');
var app = express();

	app.use(express.static(__dirname +'/public' ) );

	//Datos 
	var camisetasDatos = [
		{titulo:"Naranja", imagen:"./camiseta1.png"},
		{titulo:"Roja", imagen:"./camiseta2.png"},
		{titulo:"Azul", imagen:"./camiseta3.png"},
		{titulo:"Verde", imagen:"./camiseta4.png"}
	];

app.get('/', function(peticion, respuesta){
	respuesta.render('index.jade',
	{
		titulo : "Tienda de frutas",
		fruta  : "Mango",
		imagen : "camiseta1.png"
	});
});

app.get('/tienda', function(peticion, respuesta){

	respuesta.render('tienda.jade' ,
	{
		titulo : "Tiendas de camisetas",
		camisetas : camisetasDatos
	});

});

app.get('/tienda/comprar/:camiseta', function(peticion, respuesta){
	

	var obj = camisetasDatos.filter(function( obj ){

		if (peticion.params.camiseta == obj.titulo) {
				respuesta.render('compra.jade' , obj);
		}
	})[0];
});

app.use(function(peticion,respuesta){
	respuesta.status(400);
	respuesta.render('404.jade',{titulo : '404 : Página no encontrada'});
});





app.listen(3000, function(){
	console.log("Escuchando el puerto 3000");
});