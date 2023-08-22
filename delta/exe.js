import { delta } from './funcao.js'

import prompt from'prompt-sync'
let ler = prompt()

console.log('inrome o valor de A , B ,C \n a ')
let n1=Number(ler())
console.log('infome o valor de B')
let n2= Number(ler())
console.log('informe o valor de c ')
let n3= Number(ler())

let resultado =delta(n1,n2,n3)
console.log(resultado)