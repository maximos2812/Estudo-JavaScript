// Implementar uma função que recebendo um array de números inteiros e um número, retorne verdadeiro ou falso se 
// o número existe nos elementos do array.
// Ex: ([1,2,3,4,5], 2) =>  true
//     ([1,2,3,4,5], 6) =>  false



import prompt from 'prompt-sync'
let ler = prompt()

console.log('informe um conjunto de  cinco numeros ')
    
        let array = []

    for(let cont = 0 ; cont <5; cont ++){
        console.log('informe o numero :')
          array[cont] = Number(ler())
    }
  


console.log('informe um numero para verificar se exeiste  no conjunto:')
let verificacao = Number(ler())

let resposta = ''

     for(let pos = 0 ; pos <5 ; pos ++){
          if(verificacao == array[pos]){
             resposta =' o numero informado existe no conjunto numerico'
          }
          else{
            resposta = ' o numero informado nao existe no conjunto numerico'
          }
     }

console.log(resposta)



  