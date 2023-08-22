
import prompt from 'prompt-sync'

import { fatorial } from './funcao2.js'
let ler = prompt()

console.log('infrome um numero')
let n1 =Number(ler())

fatorial(n1)