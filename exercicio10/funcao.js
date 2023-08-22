import prompt from 'prompt-sync'
let  ler = prompt();


    export function sorteio (a){
      let sorteado = Math.random()*1000
       sorteado= parseInt(sorteado)  
     
        
        let tentativa =0
       for( tentativa = 0 ;tentativa <= 10 ;tentativa ++){
         console.log('informe um numero para  o sorteio')
           let numero = Number(ler())

           if(tentativa == 10 ){
            console.log('perdeu')
           }

           else if (numero == sorteado){
            console.log('sua escola : '+ numero +'\n ganhou')
            tentativa= tentativa +10
           }
           else if ( numero > sorteado ){
              console.log('sua escola : '+ numero +' \n maior')
           }
           else if (numero < sorteado){
            console.log('sua escola : '+ numero +' \n menor')
           }
       }
}