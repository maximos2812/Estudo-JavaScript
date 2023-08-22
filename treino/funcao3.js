
export function potencia (a,b){
    let potecia =1
    if(a>0 || b >0){
        for(let contador =1; contador <= b;contador++){
            potecia = potecia* a
        }
        console.log(a + ' elevado '  +  b  + ' é ' +  potecia)

    }
    else if (a==0 || b==0){
        console.log(a +'elevado' + b +'é' +'1')
    }
    
    else{
        console.log('calculo invalido')
    }
}