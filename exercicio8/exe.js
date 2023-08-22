

import prompt from 'prompt-sync'
import { primo } from './funcao.js'
let ler= prompt ()

console.log('informe um numero para verrificar se é um numero primo')
 let numero = Number(ler())

 let resposta =primo(numero)

 console.log(resposta)