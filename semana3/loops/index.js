/* Exercício 1 */
/*o valor impresso seria de 10 pois o valor está recebendo
o valor de i somado com o mesmo*/

/* Exercício 2 */
/* será impresso no console todos os números da lista que são maiores que 18
Não, para acessar o indice teria de ser criado uma variavel*/
////
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
console.log('Elementos do array');
for (let numeros of array) {
  console.log(numeros);
}

console.log('Elementos do array divididos por 10');
for (let numerosDivididos of array) {
  console.log(numerosDivididos / 10);
}

let menorNumero = array[0];
let maiorNumero = 0;
for (let num of array) {
  if (num > maiorNumero) {
    maiorNumero = num;
  }
}
for (let menor of array) {
  if (menor < menorNumero) {
    menorNumero = menor;
  }
}
console.log('O maior número é:', maiorNumero, 'e o menor é:', menorNumero);
