/*var http=require('http');

http.createServer(function(request,respuesta){
	respuesta.writeHead( 200 ,{'Content-Type' : 'text/plain'});
	respuesta.write("Hola jean");
	respuesta.end();
}).listen(3000,'localhost');

console.log('El servidor se muestra en http://localhost:3000');*/

//nuestro servidor
//respuesta es para devolver el valor
var http=require('http');
var fs = require('fs');
//devolvemos un html en cambio plain devuelve un archivo plano
http.createServer(function(peticion,respuesta){

	respuesta.writeHead(200,{'Content-Type' : 'text/html'});
	switch(peticion.url){
		case '/' :
			plantilla="incio.html";
			break;
		case '/nodejs' :
			plantilla = "sobrenode.html";
			break;
		default :
		plantilla = "404.html"
		break;
	}
	fs.readFile("./plantillas/"+plantilla, function( error , datos){

		respuesta.write(datos);
		respuesta.end();
	});

}).listen(3000,'localhost');