const nome = process.argv[2]
const cabelo = process.argv[3]

if(!cabelo){
    console.log("Você precisa preencher a informação cabelo")
}else{
    console.log(`E aí ${nome}. Seu cabelo é ${cabelo}`);
}

console.log(process.argv[0]);
console.log(process.argv[1]);

////array de todos os argumentos de um processo
///process.argv[0] sempre vale o proprio node
///process.argv[1] sempre vale o arquivo que vai rodar
///portanto, process.argv[0] e process.argv[1] sempre estão ocupados
