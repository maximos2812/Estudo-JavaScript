
import prompt from 'prompt-sync'
import { hifen } from './funcao4.js'
let ler = prompt()

console.log('digite um texto')
let texto= ler()

hifen(texto)

