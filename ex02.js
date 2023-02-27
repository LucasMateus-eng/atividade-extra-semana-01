// Exercício 02 - Atividade extra - XP 49 - Semana 01

const prompt = require("prompt-sync")();

const num1 = Number(prompt("Digite o 1º número: "));

const num2 = Number(prompt("Digite o 2º número: "));

function operacoesMatematicas(num1, num2) {
	let quociente = num1 / num2;

	console.log(`A soma entre ${num1} e ${num2} é: ${num1 + num2}`);
	console.log(`A diferença entre ${num1} e ${num2} é: ${num1 - num2}`);
	console.log(`O produto entre ${num1} e ${num2} é: ${num1 * num2}`);
	console.log(
		`O quociente da divisão entre ${num1} e ${num2} é: ${
			Number.isInteger(quociente) ? quociente : quociente.toFixed(2)
		}`
	); // aqui se usou o operador ternário para avaliar: é inteiro? caso sim retorne quociente, caso não retorne quociente.toFixed(2), visto que é decimal.
	console.log(`O resto da divisão entre ${num1} e ${num2} é: ${num1 % num2}`);
}

operacoesMatematicas(num1, num2);
