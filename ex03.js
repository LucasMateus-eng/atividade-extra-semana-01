// Exercício 03 - Atividade extra - XP 49 - Semana 01

const prompt = require("prompt-sync")();

const idadeUsuario = Number(prompt("Qual a sua idade? "));

function podeComprar(idade) {
	if (idade >= 16) {
		console.log("A compra pode ser realizada.");
	} else {
		console.log("A compra não pode ser realizada. Confira outros produtos.");
	}
}

podeComprar(idadeUsuario);
