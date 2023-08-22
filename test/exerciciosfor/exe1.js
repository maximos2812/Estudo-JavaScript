

import prompt from 'prompt-sync'
import { seuquencia } from './funcao1.js'
let ler = prompt()

console.log('informe um numero , para iniciar a seuquencia ')
let numero =Number(ler())
seuquencia(numero)
