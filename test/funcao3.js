


export function potencia (a,b){

   let multiplicao = 1

    if(b >0 || a >0 ){
        for(let contador= 1;contador<=b;contador++){
          multiplicao =multiplicao*a
        }
        console.log(multiplicao)
        
    }
    else {
         console.log('calculo invalido')
    }



}