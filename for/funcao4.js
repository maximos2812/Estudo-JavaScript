

export function texto (a){
    let msg= a
    let resultado =''
    for(let contador=0;contador <msg.lenght;contador ++){
        let letra = msg.charAt(contador)
         resultado = resultado + letra +'-'
    }
    console.log(resultado)
}