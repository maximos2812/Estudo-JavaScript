
import prompt from 'prompt-sync'
import { contagem } from './funcao1.js'
let ler= prompt()

console.log('informe um numero')
let numero =Number(ler())
contagem(numero)