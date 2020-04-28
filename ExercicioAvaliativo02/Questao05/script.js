function somar() {
      
	var numero1 = Number(document.getElementById("num1").value);
	var numero2 = Number(document.getElementById("num2").value);
	var numero3 = Number(document.getElementById("num3").value);
	var resultado = numero1 + numero2 + numero3;

	document.getElementById("resultado").innerHTML = resultado;
	alert(resultado);

}