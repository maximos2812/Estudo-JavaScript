

import prompt from 'prompt-sync'
let ler = prompt()
import { quadrado } from './funcao.js'

console.log('infrome o lado do quadrado')
let lado = Number(ler())
let resulatdo = quadrado(lado)

console.log(resulatdo)