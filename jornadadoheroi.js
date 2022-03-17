console.clear();
const prompt = require(`prompt-sync`)();

console.log('Décadas foram necessárias para que você pudesse chegar até aqui. Centenas de amigos se sacrificaram para que você pudesse encontrar este caminho. A vitória era a única esperança para a população de um planeta infeliz e condenado.');
console.log();
console.log('Após incansáveis batalhas, você encontrou o antigo amuleto de terraformação que trará novamente prosperidade e fartura ao seu planeta. Este amuleto é capaz de restaurar a vitalidade de planetas, trazendo novamente alimento e qualidade de vida ao seu povo.');
console.log();
console.log('Você ainda tem uma última missão: ativar o amuleto no núcleo do seu planeta. Pense bem, jovem, pois o destino de seu povo está em suas mãos.');

let score = 0

console.log();
let question1 = prompt('Ladrão por uma causa nobre! Você roubou a nave de intangibilidade? Responda com S ou N: ');
if (question1.toLowerCase() == 's') {
    score = score + 1
}

console.log();

while (question1 != 's' && question1 != 'n') {
	console.log('Digite S para sim ou N para não!');
    console.log();
	question1 = prompt('Ladrão por uma causa nobre! Você roubou a nave de intangibilidade? ');
    if (question1.toLowerCase() == 's') {
    score = score + 1
    }
}

console.log();
let question2 = prompt('Foguete não dá ré! Você armazenou combustível suficiente para uma viagem de ida? ');
if (question2.toLowerCase() == 's') {
    score = score + 1
}

console.log();

while (question2 != 's' && question2 != 'n') {
	console.log('Digite S para sim ou N para não!');
    console.log();
	question2 = prompt('Foguete não dá ré! Você armazenou combustível suficiente para uma viagem de ida? ');
    if (question2.toLowerCase() == 's') {
    score = score + 1
    }
}

console.log();
let question3 = prompt('Tudo precisa ser ativado! Você pegou a chave para ativação do amuleto? ');
if (question3.toLowerCase() == 's') {
    score = score + 1
}

console.log();

while (question3 != 's' && question3 != 'n') {
	console.log('Digite S para sim ou N para não!');
    console.log();
	question3 = prompt('Tudo precisa ser ativado! Você pegou a chave para ativação do amuleto? ');
    if (question3.toLowerCase() == 's') {
    score = score + 1
    }
}

console.log();
let question4 = prompt('Luvas tecnológicas! Deseja vestir as luvas de manipulação do amuleto? ');
if (question4.toLowerCase() == 's') {
    score = score + 1
}

console.log();

while (question4 != 's' && question4 != 'n') {
	console.log('Digite S para sim ou N para não!');
    console.log();
	question4 = prompt('Luvas tecnológicas! Deseja vestir as luvas de manipulação do amuleto? ');
    if (question4.toLowerCase() == 's') {
    score = score + 1
    }
}

console.log();
let question5 = prompt('Arranque fatal! Você construiu a base de decolagem da nave? ');
if (question5.toLowerCase() == 's') {
    score = score + 1
}

console.log();

while (question5 != 's' && question5 != 'n') {
	console.log('Digite S para sim ou N para não!');
    console.log();
	question5 = prompt('Arranque fatal! Você construiu a base de decolagem da nave? ');
    if (question5.toLowerCase() == 's') {
    score = score + 1
    }
}

console.log();

if (score == 0) {
    console.log('Você falha miseravelmente.');
} else if (score == 1) {
    console.log('Você falha, mas ainda consegue fugir da situação.');
} else if (score == 2) {
    console.log('Você falha, mas ainda consegue fugir da situação.');
} else if (score == 3) {
    console.log('Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.');
} else if (score == 4) {
    console.log('Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.');
} else {
    console.log('Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.');
}

console.log(`Pontuação total: ${score}.`);
console.log();