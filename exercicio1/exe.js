

import prompt from 'prompt-sync'
import { sequecia } from './funcao.js'
let ler= prompt()

console.log('infome um numero')
let n1= Number(ler())

let resultado= sequecia(n1)