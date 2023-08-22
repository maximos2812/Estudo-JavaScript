

import prompt from 'prompt-sync'
let ler = prompt()

console.log('informe a quantidade de notas a serem armazenadas')
     let qtd = Number(ler())

        let notas =[]
           for(let cont =0 ; cont <qtd ; cont++){
             console.log('informe uma nota')
                 notas[cont] = Number(ler())
      } 

console.log('notas digitadas :')

    for(let contador of notas){
        process.stdout.write(String('-'+contador ))
    }
      
         let soma = 0
           for(let cont = 0 ; cont < qtd ; cont ++){
              soma = soma + notas[cont]
    } 
               let media = soma / qtd .toFixed(2)

console.log('\na media é : ' + media)
