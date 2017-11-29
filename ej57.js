var usuario="pepe2017"
	password="12345"

var autentificacion=(usuario=="pepe2017" && password=="12345")?`El usuario está autenticado y puede ver el contenido`:`Error, no se pudo autenticar al usuario, puede intentarlo más tarde`
console.log(autentificacion)