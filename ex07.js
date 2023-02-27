// Exercício 07 - Atividade extra - XP 49 - Semana 01

const prompt = require("prompt-sync")();

const pesoRacao = Number(prompt("Peso da ração (Kg): "));
const consumoDiarioCachorro = Number(prompt("Consumo diário (gr): "));

function duracaoRacao(pesoRacao, consumoDiarioCachorro) {
	const pesoRacaoEmGramas = pesoRacao * 1000; // aqui criamos uma variável auxiliar para os cálculos
	const duracaoEmDias = Math.floor(pesoRacaoEmGramas / consumoDiarioCachorro); // aqui arredondamos o valor para o menor número inteiro possível
	const sobra = pesoRacaoEmGramas % consumoDiarioCachorro; // o resto da divisão entre o peso da ração (em gramas) e o consumo é igual ao que sobra da ração

	console.log(`A duração da ração é: ${duracaoEmDias} dias`);
	console.log(`A quantidade que sobra é: ${sobra} gr`);
}

duracaoRacao(pesoRacao, consumoDiarioCachorro);
