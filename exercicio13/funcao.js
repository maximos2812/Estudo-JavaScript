
// Implemente um programa para calcular o total a se pagar pela compra de ingressos de
// cinema sabendo que cada ingresso
// custa R$ 28,50. O usuário deve informar o tipo dos ingressos (Meia ou Inteira) e
// a quantidade de ingressos. 
// Exemplo:
// Para 3 ingressos meia, o valor total é 42.75.
// Para 3 ingressos inteira, o valor total é 85.5


export function ingresso (a ,b) {
    let x = ''

    if(a=='inteira'){
        x = b * 28.50
    }
    else if(a=='meia'){
        x =b *14.25
    }
    return x
}