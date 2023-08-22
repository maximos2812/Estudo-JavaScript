import { sequecia } from './funcao.js'
import prompt from 'prompt-sync'
let ler = prompt()

console.log('informe um numero')
let nun = Number(ler())

let resultado = sequecia(nun)

console.log(resultado)