
export function sequecia(a){
    for(let contador = 1; contador<=a;contador++){
        console.log(contador)
    }
}

export function reguressivo (a){
    for(let contador =a ; contador > 0;contador--){
    console.log(contador)}
}
export function inicio (a,b){
    for(let contador = a ; contador <= b ;contador ++){
        console.log(confirm)
    }
}

export function pares (a,b){
    for(let contador =  a;contador <= b;contador++){
        if(contador % 2 ==0){
            console.log(contador)
        }
    }
}

export function carcters (a) {
    for(let contador = 1 ; contador <=a;contador++) {
        process.stdout.write(String ('*'))
    }
}


export function quadrado (a){
    for (let contador = 0; contador < a;contador++){
        for (let linha = 1 ;linha <a;linha ++){
            process.stdout.write(String('*'))
        }
        console.log('*')
    }
}



export function trinagulo (a){
    for(let contador = 1 ; contador <= a ; contador++){
      for(let linha= a; linha>0; linha-- ){
        process.stdout.write(String('*'))
      }
      console.log('*')
    }
}