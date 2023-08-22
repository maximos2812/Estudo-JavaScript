
import prompt from 'prompt-sync'
import { potencia } from './funcao.js'
let ler = prompt()

console.log('informe a base')
let n1 = Number(ler())


console.log('informe o expoente')
let n2 = Number(ler())
let resultado = potencia(n1,n2)