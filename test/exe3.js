import prompt from 'prompt-sync'
import { potencia } from './funcao3.js'
let ler = prompt()

console.log('informe  a base da potenciacao')
let base = Number(ler())

console.log('informe o expoente')
let expoente= Number(ler())
potencia(base,expoente)