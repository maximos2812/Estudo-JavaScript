

import prompt from 'prompt-sync'
import { primo } from './funcao8.js'
let ler = prompt()

console.log('informe um numero ')
let numero = Number(ler())
primo(numero)