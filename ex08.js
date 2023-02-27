// Exercício 08 - Atividade extra - XP 49 - Semana 01

const prompt = require("prompt-sync")();

const valor = Number(prompt("Valor da compra (R$): "));

function calculoCondicoesPagamento(valor) {
	const aux = Math.floor(valor / 20); // nº de parcelas - no caso mais geral (sem se importar com a regra da quantidade máxima permitida)

	let parcelas;
	if (aux == 0) {
		parcelas = 1; // cláusula guarda, para o caso do usuário inserir o valor 0
	} else if (aux > 6) {
		parcelas = 6; // aqui é aplicada a restrição da quantidade máxima permitida para o número de parcelas
	} else {
		parcelas = aux; // nesse caso, o número de parcelas cálculas anteriormente é menor que o máximo permitido
	}

	const valorParcela = valor / parcelas;

	console.log(
		`Você pode pagar em ${parcelas}x de R$: ${valorParcela.toFixed(2)}`
	);
}

calculoCondicoesPagamento(valor);
