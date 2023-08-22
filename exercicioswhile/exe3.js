

import prompt from 'prompt-sync'
import { inicio } from './funcao.js'
let ler =prompt()

console.log('informe dois valores um de inicio e outro de fim \n valor um  ')
let n1= Number(ler())

console.log('valor dois')
let n2 = Number(ler())
let resultado = inicio(n1,n2)
console.log(resultado)