

import prompt from 'prompt-sync'
import { potencia } from './funcaopotecia.js'

let ler  = prompt()

console.log('informe a base')
let base = Number(ler())

console.log('informe o expoente')
let expoente = Number(ler())

potencia(base,expoente)