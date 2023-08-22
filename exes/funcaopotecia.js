

export function potencia(b,e){

    let potencia =1
    
    if(e<0 || b <0){
        console.log('calculo invalido')
    }
    else if (e == 0 ){
        console.log( b + ' elevado á ' + e +' é ' + potencia)
    }

    else {
         for(let contador = 1 ;contador <= e; contador++){
            potencia = potencia * b

            
         }
         console.log(potencia)
    }
}