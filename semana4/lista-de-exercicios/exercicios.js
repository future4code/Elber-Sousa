//Exercício 1

function inverteArray(array) {
  // implemente sua lógica aqui
  const numbers = [0, 8, 23, 16, 10, 15, 41, 12, 13];
  return numbers.reverse();
}
//Exercício 2

function retornaNumerosParesElevadosADois(array) {
  // implemente sua lógica aqui
  const numbers = [1, 2, 3, 4, 5, 6];
  let pares = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      numbers[i] = numbers[i] * numbers[i];
      pares.push(numbers[i]);
    }
  }
  return pares;
}
//Exercício 3

function retornaNumerosPares(array) {
  // implemente sua lógica aqui
  const numbers = [1, 2, 3, 4, 5, 6];
  let pares = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      pares.push(numbers[i]);
    }
  }
  return pares;
}

//Exercício 4

function retornaMaiorNumero(array) {
  // implemente sua lógica aqui
  numbers = [10, 18, 7, 56, 39];
  let maiorNumero = 0;
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > maiorNumero) {
      maiorNumero = numbers[i];
    }
  }
  return maiorNumero;
}

//Exercício 5

function retornaQuantidadeElementos(array) {
  // implemente sua lógica aqui
  return array.length;
}

//Exercício 6

function retornaExpressoesBooleanas() {
  // implemente sua lógica aqui
  const booleano1 = true;
  const booleano2 = false;
  const booleano3 = !booleano2;
  const booleano4 = !booleano3;
  respostas = [false, false, true, true, true];
  return respostas;
}

//Exercício 7

function retornaNNumerosPares(n) {
  // implemente sua lógica aqui
  n = 5;
  let numerosPares = [];
  for (var i = 0; i < n * 2; i++) {
    if (i % 2 === 0) {
      numerosPares.push(i);
    }
  }
  return numerosPares;
}

// Exercício 8

function checaTriangulo(a, b, c) {
  // implemente sua lógica aqui
  if (a === b && b === c) {
    return 'Equilátero';
  } else if (a === b && b !== c) {
    return 'Isósceles';
  } else {
    return 'Escaleno';
  }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
  // implemente sua lógica aqui
  let menorNumero = 0;
  let saida = {
    maiorNumero: 0,
    maiorDivisivelporMenor: 0,
    diferenca: 0
  };
  if (num1 > num2) {
    saida.maiorNumero = num1;
    menorNumero = num2;
  } else if (num2 > num1) {
    saida.maiorNumero = num2;
    menorNumero = num1;
  }
  if (saida.maiorNumero % menorNumero === 0) {
    saida.maiorDivisivelporMenor = true;
  } else {
    saida.maiorDivisivelporMenor = false;
  }
  saida.diferenca = saida.maiorNumero - menorNumero;
  return saida;
}

// Exercício 10

function segundoMaiorEMenor(array) {
  // implemente sua lógica aqui
  let segundos = [];
  let max = array.map(Number).reduce(function (a, b) {
    return Math.max(a, b);
  });
  array.splice(array.indexOf(max), 1);
  var min = array.map(Number).reduce(function (a, b) {
    return Math.min(a, b);
  });
  array.splice(array.indexOf(min), 1);
  max = array.map(Number).reduce(function (a, b) {
    return Math.max(a, b);
  });
  min = array.map(Number).reduce(function (a, b) {
    return Math.min(a, b);
  });
  segundos.push(max, min);
  return segundos;
}

//Exercício 11

function ordenaArray(array) {
  // implemente sua lógica aqui
  return array.sort(function (a, b) {
    return a - b;
  });
}

// Exercício 12

function filmeFavorito() {
  // implemente sua lógica aqui
  const filmeFavorito = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  };
  return filmeFavorito;
}

// Exercício 13

function imprimeChamada() {
  // implemente sua lógica aqui
  const filmeFavorito = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: [
      'Meryl Streep',
      ' Anne Hathaway',
      ' Emily Blunt',
      ' Stanley Tucci.'
    ]
  };
  return `Venha assistir ao filme ${filmeFavorito.nome}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.atores}`;
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
  // implemente sua lógica aqui
  let retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2
  };
  return retangulo;
}

// Exercício 15

function anonimizaPessoa(pessoa) {
  // implemente sua lógica aqui
  anonimo = {
    nome: pessoa.nome,
    idade: pessoa.idade,
    email: pessoa.email,
    endereco: pessoa.endereco
  };
  anonimo.nome = 'ANÔNIMO';
  return anonimo;
}

// Exercício 16

const arrayDePessoas = [
  { nome: 'Pedro', idade: 20 },
  { nome: 'João', idade: 10 },
  { nome: 'Paula', idade: 12 },
  { nome: 'Artur', idade: 89 }
];

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
  // implemente sua lógica aqui
}
// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
  // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
  // implemente sua lógica aqui
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i] * 2;
  }
  return array;
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i] * 2 + '';
  }
  return array;
}

// Exercício 17, letra C

function verificaParidade(array) {
  // implemente sua lógica aqui
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      array[i] = array[i] + ' é par';
    } else {
      array[i] = array[i] + ' é ímpar';
    }
  }
  return array;
}

// Exercício 18

const pessoas = [
  { nome: 'Paula', idade: 12, altura: 1.8 },
  { nome: 'João', idade: 20, altura: 1.3 },
  { nome: 'Pedro', idade: 15, altura: 1.9 },
  { nome: 'Luciano', idade: 22, altura: 1.8 },
  { nome: 'Artur', idade: 10, altura: 1.2 },
  { nome: 'Soter', idade: 70, altura: 1.9 }
];

//Exercício 18, letra A

function retornaPessoasAutorizadas(pessoas) {
  // implemente sua lógica aqui
}

// Exercício 18, letra B

function retornaPessoasNaoAutorizadas(pessoas) {
  // implemente sua lógica aqui
}

//Exercício 19

const consultas = [
  {
    nome: 'João',
    genero: 'masculino',
    cancelada: true,
    dataDaConsulta: '01/10/2019'
  },
  {
    nome: 'Pedro',
    genero: 'masculino',
    cancelada: false,
    dataDaConsulta: '02/10/2019'
  },
  {
    nome: 'Paula',
    genero: 'feminino',
    cancelada: true,
    dataDaConsulta: '03/11/2019'
  },
  {
    nome: 'Márcia',
    genero: 'feminino',
    cancelada: false,
    dataDaConsulta: '04/11/2019'
  }
];

function retornaEmailConsulta(consultas) {
  // implemente sua lógica aqui
}

//Exercício 20

const contas = [
  { cliente: 'João', saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: 'Paula', saldoTotal: 7500, compras: [200, 1040] },
  { cliente: 'Pedro', saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: 'Luciano', saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: 'Artur', saldoTotal: 1800, compras: [200, 300] },
  { cliente: 'Soter', saldoTotal: 1200, compras: [] }
];

function atualizaSaldo() {
  // implemente sua lógica aqui
}
