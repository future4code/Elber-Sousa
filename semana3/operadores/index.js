//1
// a.  false
// b.  false
// c.  true
// e.  boolean
//2
// a.  undefined
// b.  null
// c.  11
// d.  3
// e.  (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]0: 31: 192: 53: 64: 75: 86: 97: 108: 119: 1210: 13length: 11__proto__: Array(0)
// f.  9

let idade = Number(prompt('Digite a sua idade: '));
let idadeAmg = Number(prompt('Digite a idade do seu melhor amigo(a): '));
let soma = idade - idadeAmg;
if (soma < 0) {
  soma = soma * -1;
}

if (idade > idadeAmg) {
  console.log(
    'Sua idade é maior do que a do seu melhor amigo?',
    idade > idadeAmg
  );
  console.log('Sua idade é maior que a do seu amigo');
  console.log('E a diferença entre as idades é de:', soma, 'anos');
} else {
  console.log(
    'Sua idade é maior do que a do seu melhor amigo?',
    idade > idadeAmg
  );
  console.log('A idade do seu amigo é maior do que a sua');
  console.log('E a diferença entre as idades é de:', soma, 'anos');
}
/////////

let num = Number(prompt('Insira um número par: '));
let resto = num % 2;
console.log(resto);
//sempre que tiver um número par o resto será 0, caso contrário ele terá resto

let listaDeTarefas = [];
listaDeTarefas.push(prompt('Cite uma tarefa que você realiza no dia: '));
listaDeTarefas.push(prompt('Cite mais uma tarefa que você realiza no dia: '));
listaDeTarefas.push(prompt('Cite mais uma tarefa que você realiza no dia: '));
console.log(listaDeTarefas);
listaDeTarefas.splice(
  prompt('Digite o índice da tarefa que deseja remover: '),
  1
);
console.log(listaDeTarefas);
//////
let nome = prompt('Digite o seu nome: ');
let email = prompt('Digite o seu e-mail: ');
console.log(
  'O e-mail: ',
  email,
  'foi cadastrado com sucesso. Seja bem vinda(o)',
  nome
);
