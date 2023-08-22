

export function potencia(a,b){
    let x = 1
    for(let contador=b ; contador >0 ; contador--){
       if (a>0 && b>0){
        x = a *x
       }
       else{
         x = 'calculo invalido'
       }
    }
}