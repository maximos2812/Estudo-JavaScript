

import prompt from 'prompt-sync'
import { media, msg } from './funcao7.js'
let ler = prompt()

let nota = msg()
let nota2= msg()
let nota3= msg()

let me= media(nota , nota2, nota3);
console.log(me)
