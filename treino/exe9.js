
import prompt from 'prompt-sync'
import { sequencia } from './funcao9.js'
let ler = prompt()

console.log('informe um numero da sequencia')
let numeo = Number(ler())

sequencia(numeo)