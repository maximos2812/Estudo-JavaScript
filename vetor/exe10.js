
import prompt from 'prompt-sync'
let ler =prompt() 

console.log('informe a quantodade de numeros a serem armazenados ')
     let qtd = Number(ler())

           let valor = []
             for(let cont = 0 ; cont < qtd ; cont++){
                console.log('informe uma nota')
                      valor[cont] = ler()
                             }

console.log('numeros informados : ')

                    for(let cont of valor){
                process.stdout.write(String( cont + ' -'  ))
              }
              let anterior =0
              let soma = 0

              for(let cont = 0 ; cont <qtd ; cont++){
                  soma = soma + cont
                  anterior = anterior + soma -1
                   if(valor[soma] > valor[cont]  ){
                      console.log('a maior nota é'+ valor[cont])
                   }
                   else if(valor[cont] > valor[soma]){
                    console.log('a maior nota é'+ valor[cont])
                   }
                     
              }
           
           