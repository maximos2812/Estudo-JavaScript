

export function separar  (a){
    let resultado = ''
    let msg = a
    for(let contador = 0 ;contador < msg.length ;contador++){
        let sifra = msg.charAt(contador) 
        resultado = resultado + sifra + '-'
        
    }
    console.log(resultado)
}