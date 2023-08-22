
import prompt from 'prompt-sync'
let ler= prompt()

console.log('informe a qunatidade de valores a serem armazenados')
let qtd = Number(ler())
let valores = []
   
  for(
  
  let cont = 0; cont <qtd ; cont++){
       console.log('informe um numero')
       valores[cont] = Number(ler())
  }

    
console.log('\no dobro de cada numero é\n') 

     let soma = []
    for(let cont= 0 ; cont <qtd ; cont ++){
      soma[cont]= valores[cont] + valores[cont]
  }

   for(let cont =0 ; cont <qtd ; cont ++){
      console.log('o dobro de '+ valores[cont] +' é '+ soma[cont])
   }