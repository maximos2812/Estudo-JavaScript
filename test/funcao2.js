

export function fatorila(a){
    let fatorial= 1
    for(let contador=1; contador <=a;contador++){
      fatorial = contador * fatorial
    }
    console.log(fatorial)
}