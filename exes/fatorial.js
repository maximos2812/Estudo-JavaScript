


import prompt from 'prompt-sync'
import { fatorial } from './funfat.js'
let ler  = prompt()

console.log('informe um numero')
let valor = Number(ler())

fatorial(valor)
