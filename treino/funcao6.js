


export function palindromo (a){
    let texto =a
    let inverso=''
    let plaindromo=''
    for(let contador = 0;contador< texto.length;contador++){
        plaindromo = texto.charAt(contador);
        inverso = plaindromo + inverso
    
    }


    if(inverso == texto){
        console.log('é um palindromo')
    }
    else{
        console.log('nao e um palindromo')
    }
    
}  
