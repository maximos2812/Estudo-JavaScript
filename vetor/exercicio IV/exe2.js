// Implementar uma função que recebendo um array de números inteiros e um número, retorne um novo array com o 
// número adicionado ao final.
// Ex: ([1,2,3,4,5], 6) =>  [1,2,3,4,5,6]


import prompt from 'prompt-sync'
let ler= prompt ()

console.log('informe um conjunto de cinco numeros')

      let conjunto = []
  for(let cont = 0 ; cont <5 ; cont ++){
      console.log('informe um numero')
        conjunto[cont]= Number(ler())
  }

console.log('informe um numero para adicionar dentro do conjunto')
let num = Number(ler())

conjunto[6]=num
  
    for(let cont = 0 ; cont <conjunto.length ; cont ++){
        console.log(conjunto[cont])
        
    }