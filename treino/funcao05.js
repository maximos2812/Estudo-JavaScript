
export function invertido (a){
    let texto = a
    let resultado =''
    for (let contador = 0; contador < texto.length;contador++ ){
         let hifen =  a.charAt(contador)
         resultado =hifen + '-'+ resultado 
     
    }
    console.log(resultado)
    }