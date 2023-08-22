
import prompt from 'prompt-sync'
let ler= prompt()

console.log('informe a quantidade de numeros a serem armazenados ')
  let qtd = Number(ler())
   
        let valor = []

    for(let cont= 0 ; cont < qtd ; cont ++){
          console.log('informe os valores')
           valor[cont]= ler()
    }

console.log('os numeros pares sao :')

    for(let cont = 0 ; cont <qtd ; cont++){
          if(valor[cont] %2 ==0) {
               console.log(valor[cont])
          }
    }