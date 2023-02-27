// Exercício 05 - Atividade extra - XP 49 - Semana 01

const prompt = require("prompt-sync")();

const modelo = prompt("Qual o modelo do veículo desejado? ");
const preco = Number(prompt("Qual o preço do veículo desejado? "));

function condicaoDeCompra(modelo, preco) {
	const entrada = Math.floor(preco * 0.3); // aqui arredondamos o valor para o menor número inteiro possível.
	const parcelaEm12Vezes = (preco - entrada) / 12;

	console.log(
		`A simulação de parcelamento para o veículo ${modelo} é: entrada de R$ ${entrada.toFixed(
			2
		)} e 12x de R$ ${parcelaEm12Vezes.toFixed(2)}`
	);
}

condicaoDeCompra(modelo, preco);
