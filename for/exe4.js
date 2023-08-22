

import prompt from 'prompt-sync'
import { texto } from './funcao4.js'
let ler = prompt()

console.log(' informe um texto')
let frase = ler()

let resultado =texto(frase)
console.log(resultado)