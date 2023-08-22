

import prompt from 'prompt-sync'
import { soma } from './funsoma.js'
let ler  = prompt()

console.log('informe um numero')
let valor = Number(ler())

soma(valor)