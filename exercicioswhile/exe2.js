import prompt from 'prompt-sync'
import { reguressivo } from './funcao.js'
let ler = prompt()

console.log(' INFROME UM NUMERO')
let nun= Number(ler())

let resultado = reguressivo(nun)
console.log(resultado)