// Exercício 06 - Atividade extra - XP 49 - Semana 01

const prompt = require("prompt-sync")();

const quantidadeDePessoas = Number(
	prompt("Quantas pessoas entraram no clube de pesca? ")
);

const numeroDePeixesObtidos = Number(prompt("Quantos peixes foram obtidos? "));

function calculoCustoEntrada(quantidadeDePessoas, numeroDePeixesObtidos) {
	if (quantidadeDePessoas >= numeroDePeixesObtidos) {
		console.log(`O total a ser pago é: R$ ${quantidadeDePessoas * 20}`); // lembre-se: cada pessoa pagante pode levar 1 peixe gratuitamente
	} else {
		const peixesExtras = numeroDePeixesObtidos - quantidadeDePessoas; // quantos peixes "não gratuitos" foram levados
		console.log(
			`O total a ser pago é: R$ ${quantidadeDePessoas * 20 + peixesExtras * 12}`
		);
	}
}

calculoCustoEntrada(quantidadeDePessoas, numeroDePeixesObtidos);
