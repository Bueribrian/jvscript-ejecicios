var mensaje="3.14 es un gran numero, pero mejor es 42 que le da significado"	
	pi=mensaje.slice(0,3);
	pi=parseFloat(pi)
	significadoDeLaVida=mensaje.slice(38,40)
	significadoDeLaVida=parseFloat(significadoDeLaVida)
	resultado=significadoDeLaVida+pi;
	console.log(resultado `es el resultado de sumar las variables ${pi.toString()} y ${significadoDeLaVida.toString( )} , concatenadno los valores`).