

import prompt from 'prompt-sync'
import { carcters } from './funcao.js'
let ler = prompt()

console.log('informe um numero')
let nun = Number( ler())
let resultado = carcters(nun)

console.log(resultado)