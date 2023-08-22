
import prompt from 'prompt-sync'
import { reguresao } from './funcao.js'
let ler = prompt()

console.log('informe um numero')
let n1 = Number(ler())
let resposta =reguresao(n1)