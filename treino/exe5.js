
import prompt from 'prompt-sync'

import { invertido } from './funcao05.js'
let ler = prompt()

console.log('digite um texto')
let texto= ler()

invertido(texto)

