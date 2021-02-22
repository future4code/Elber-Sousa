let nome;
console.log(typeof nome);
let idade;
console.log(typeof idade);
//Estão com valores não definidos
//pois não atribuí nenhum valor a eles
nome = prompt('Digite o seu nome: ', nome);
console.log(typeof nome);
idade = prompt('Digite a sua idade: ', idade);
console.log(typeof idade);
//agora elas tem o valor de string
//pois os dados foram inseridos
console.log('Olá', nome, 'você tem', idade, 'anos.');
//
let comida = prompt('Digite a sua comida preferida: ');
console.log('A sua comida preferida é: ', comida);
let filme = prompt('Digite o seu filme preferido: ');
console.log('O seu filme preferido é: ', filme);
let serie = prompt('Digite a sua série preferida: ');
console.log('A sua série preferida é: ', serie);
let jogo = prompt('Digite o seu jogo preferido: ');
console.log('O seu jogo preferido é: ', jogo);
let cor = prompt('Digite a sua cor preferida: ');
console.log('A sua cor preferida é: ', cor);
//
let comidas = ['pizza', 'hamburguer', 'coxinha', 'pastel', 'açaí'];
console.log(comidas);
console.log('Essas são minhas comidas preferidas: ', comidas);
comidas[1] = prompt('Digite a sua comida preferida: ');
console.log(comidas);
//
let perguntas = [
  'Você está sentado?',
  'Você está de azul?',
  'Você está com fome?'
];
let respostas = [true, false, true];
console.log(perguntas[0], respostas[0]);
console.log(perguntas[1], respostas[1]);
console.log(perguntas[2], respostas[2]);
