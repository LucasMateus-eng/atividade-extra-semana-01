// Exercício 04 - Atividade extra - XP 49 - Semana 01

const prompt = require("prompt-sync")();

const bairro = prompt("Em qual bairro iremos realizar a entrega? ");

function custoFrete(bairro) {
	// atenção para o ajuste feito no valor repassado pelo usuário.
	switch (bairro.toLowerCase()) {
		case "felicidade":
			console.log("O custo do frete é: R$ 23.00");
			break;
		case "alegria":
			console.log("O custo do frete é: R$ 8.00");
			break;
		case "vale dos sonhos":
			console.log("O custo do frete é: R$ 12.00");
			break;
		default:
			console.log("O seu bairro não está em nossa cobertura de entregas.");
			break;
	}
}

custoFrete(bairro);
