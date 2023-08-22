

import prompt from 'prompt-sync'
import { fatorila } from './funcao2.js'
let ler = prompt()

console.log('informe um numero')
let numeor=Number(ler())
fatorila(numeor);