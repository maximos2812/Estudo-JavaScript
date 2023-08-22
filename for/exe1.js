

import prompt from 'prompt-sync'
import { soma } from './funcao.js'
let ler = prompt()

console.log('infrome um numero')
let n1 =Number(ler())

soma(n1)