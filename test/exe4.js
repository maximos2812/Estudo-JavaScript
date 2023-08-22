
import prompt from 'prompt-sync'
import { separar } from './funcao4.js'
let ler= prompt()

console.log('informe um texto')
let text= ler()
separar(text)
