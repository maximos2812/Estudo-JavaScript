
import prompt from'prompt-sync'
import { fatorial } from './funcao2.js'
let ler = prompt()

console.log('informe um numero')
let numero = Number(ler())
fatorial(numero)