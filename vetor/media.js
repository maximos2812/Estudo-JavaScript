
import prompt from 'prompt-sync'
let ler=  prompt()

console.log('informe a quantidade de notas a serem armazenadas ')
  let qtd = Number(ler())
 

       let notas = []
          for(let cont = 0 ; cont < qtd; cont ++){
               console.log('informe uma nota ')
               notas[cont]=Number(ler())

                  while(notas[cont] >10 || notas[cont] <0){
                    console.log('nota invalida. ela deve estar entre 0 e 10')
                      console.log('informe uma nota')
                         notas[cont]= ler()
               }
          }

console.log('notas informadas:')
   
       for(let cont of notas){
             process.stdout.write(String('-'+cont))
       }
  
           let soma = 0
          for(let cont = 0 ; cont < qtd ; cont ++){
                 soma = soma + notas[cont]
          }
        


