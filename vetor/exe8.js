import prompt from 'prompt-sync'
let ler = prompt()

console.log('informe a quantidades de nomes a serem adicionados')
   let qtd = Number(ler())
 
         let nomes = []

     for(let cont = 0 ; cont <qtd ; cont ++ ){
           console.log('informe um nome')
             nomes[cont]=ler()
     } 

console.log('os nomes apos o filtro  são:')
            

           for(let cont =0 ; cont < qtd; cont++ ){
                if(nomes[cont].charAt(0) == 'L' || nomes[cont].charAt(0)=='H'){
                     console.log(nomes[cont])
                }
      }


      
   
