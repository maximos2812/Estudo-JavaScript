

export function palindromo(a){
   let  resultado = ''
    let msg =a 
    for (let contador = 0 ; contador <  msg.length ; contador++){
        let letra= msg.charAt(contador) 
        resultado =  letra + resultado

        
        
    }
    if( resultado == msg ){
        console.log('é um palindromo')
    }
    else{
        console.log('nao é um palindromo')
    }
}