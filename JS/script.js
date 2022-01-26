function fa() {
		var dist = document.getElementById("km").value;
		var tempo = document.getElementById("h").value;
		var velocidade = dist / tempo;
		document.getElementById("vazio").innerHTML = velocidade;
		if (tempo == 0)
			document.getElementById("vazio").innerHTML = "Divisão não permitida (Divisão por zero)"
		if (tempo < 0)
			document.getElementById("vazio").innerHTML = "Divisão não permitida (Divisão por tempo negativo)"
		if (dist < 0)
			document.getElementById("vazio").innerHTML = "Divisão não permitida (Divisão por distância negativa)"
		if (dist == 0 & tempo == 0)
			document.getElementById("vazio").innerHTML = "Por favor, digite os valores"
		if (dist < 0 & tempo < 0)
			document.getElementById("vazio").innerHTML = "Divisão não permitida (Ambos valores negativos)"
}