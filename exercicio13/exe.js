
//Implemente um programa para calcular o total a se pagar pela compra de ingressos de cinema
// sabendo que cada ingresso custa R$ 28,50.
// O usuário deve informar o tipo dos ingressos (Meia ou Inteira) e a quantidade de ingressos. 
//Exemplo:
//Para 3 ingressos meia, o valor total é 42.75.
//Para 3 ingressos inteira, o valor total é 85.5
import { ingresso } from './funcao.js'
import prompt from 'prompt-sync'
let ler = prompt()

console.log('informe o tipo de ingresso que deseja ... \n ( meia ou inteira)')
let tipo = ler()

console.log('infrome a quantiade de ingressos comprados')
let quantidade = Number(ler())

let resulatdo = ingresso(tipo,quantidade)
console.log(`para ${quantidade} do tipo ${tipo} o valor a ser pago é de ${resulatdo}`)
