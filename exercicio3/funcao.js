

export function potencia (a,b){
    let x =''
    let resultado = 1
    for(let contador=1;contador <=b;contador++){
        if(a>0 && b>0){
          x=  resultado= resultado*a
        }
        else if (b==0){
            x= 1

        }
        else{
            x ='calculo invalido'
        }
    }
    console.log(x)
}