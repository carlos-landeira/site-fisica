function cf() {
		var m = document.getElementById("kg").value;
		var a = document.getElementById("m/s2").value;
		var força = m * a;
		document.getElementById("vazio").innerHTML = força;
		if (a < 0)
			document.getElementById("vazio").innerHTML = "Multiplicação não permitida (Multiplicação por aceleração negativa)"
		if (m < 0)
			document.getElementById("vazio").innerHTML = "Multiplicação não permitida (Multiplicação por massa negativa)"
		if (a == 0 & m == 0)
			document.getElementById("vazio").innerHTML = "Por favor, digite os valores"
}