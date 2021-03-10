
/*a 10
   50

b Nada apareceria no console


EXERCÍCIO 2

a.  Darvas
    Goli

b.  Amanda
    Caio


EXERCÍCIO 3

Verifica se o número é par e se for par adiciona o número multiplicado por ele a um novo array


*/

//EXERCÍCIO 4

function sobreMim() {
  console.log(
    'Meu nome é Elber, tenho 21 anos, moro em Teresina e sou estudante.'
  );
}

function sobreMim(nome, idade, cidade, estudante) {
  let mensagem = '';
  if (estudante) {
    mensagem = 'sou';
  } else {
    mensagem = 'não sou';
  }

  console.log(
    `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${mensagem} estudante.`
  );
}

//EXERCICIO 5

let soma = function (a, b) {
  return a + b;
};

console.log(soma(1, 2));

let maior = function (a, b) {
  if (a >= b) {
    return true;
  } else {
    return false;
  }
};

console.log(maior(13, 6));

let imprimeDezVezes = function (mensagem) {
  for (let i = 0; i < 10; i++) {
    console.log(mensagem);
  }
};

//EXERCÍCIO 6

let qtddDeElementos = (array) => {
  return array.length;
};

let par = (numero) => {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

let numeroDePares = (array) => {
  let qtddDePares = 0;
  for (numero of array) {
    if (numero % 2 === 0) {
      qtddDePares += 1;
    }
  }

  return qtddDePares;
};

let numeroDePares = (array) => {
  let qtddDePares = 0;
  for (numero of array) {
    if (par(numero)) {
      qtddDePares += 1;
    }
  }

  return qtddDePares;
};
=======
let arrayPosts = []

function aoClicarCriarPost() {
    const tituloDoPost = document.getElementById("titulo-post")
    const autorDoPost = document.getElementById("autor-post")
    const conteudoDoPost = document.getElementById("conteudo-post")

    const novoPost = {
        titulo: tituloDoPost.value,
        autor: autorDoPost.value,
        conteudo: conteudoDoPost.value
    }

    arrayPosts.push(novoPost)
    tituloDoPost.value = ""
    autorDoPost.value = ""
    conteudoDoPost.value = ""
    console.log(arrayPosts)
    inserirPosts()
}

function inserirPosts() {
    const container = document.getElementById("container-de-posts")
    container.innerHTML = ""
    for (let item of arrayPosts) {
        container.innerHTML += criaPost(item)
    }
}

function criaPost(itemPost) {
    return "<div class='post-individual'>" +
        "<h3>" + itemPost.titulo + "</h3>" +
        "<p><i>" + itemPost.autor + "</i></p>" + 
        "<p>" + itemPost.conteudo + "</p>"+
        "</div>"
}

