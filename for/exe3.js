
import prompt from 'prompt-sync'
import { potencia } from './funcao3.js'
let ler = prompt()

console.log('infrome a base')
let n1 =Number(ler())

console.log('informe o expoente')
let n2= Number(ler())

potencia(n1,n2)
