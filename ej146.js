
var usuario={
	username:"batman",
	password:"Alfred1960KPO",


}


var auntenticarUsuario=function(nombreDeUsuario, clave){
	if(nombreDeUsuario==="batman"&&clave==="Alfred1960KPO"){
		return true
	}else{
		return false
	}
}
var estadousuario=console.log(auntenticarUsuario(usuario.username, usuario.password))

if (estadousuario){
	console.log(usuario)
}else{
	console.log("bien papu")
}