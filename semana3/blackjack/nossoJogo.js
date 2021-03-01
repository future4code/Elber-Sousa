/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log('Bem vindo ao jogo de BlackJack!')
if (confirm('Quer iniciar uma nova rodada?')===true){
   let carta1 = comprarCarta()
   let carta2 = comprarCarta()
   let carta1Pc = comprarCarta()
   let carta2Pc = comprarCarta()

   let pontos = carta1.valor + carta2.valor
   let pontosPc = carta1Pc.valor + carta2Pc.valor

   console.log(`Usuário - cartas: ${carta1.texto} ${carta2.texto} - ${pontos})`)
   console.log(`Computador - cartas: ${carta1Pc.texto} ${carta2Pc.texto} - ${pontosPc})`)

   if (pontos > pontosPc){
      console.log('O usuário ganhou!!!')
   }
   else if (pontosPc > pontos){
      console.log('O computador ganhou!!!')
   }
   else if (pontos === pontosPc){
      console.log('Empate!!!')
   }
}
else{
   console.log('O jogo acabou.')
}