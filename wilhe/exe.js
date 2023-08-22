//1 - Escreva um programa que exibe qualquer tabuada completa. 
//O programa deve perguntar ao usuário qual tabuada ele deseja visualizar, que irá responder digitando um número de 1 a 10.

import { tabuada } from './funcao.js'
import prompt from 'prompt-sync'
let ler = prompt()

console.log('informe a tabuada que deseja que desja')
let nun = Number(ler())

let resultado = tabuada(nun)
console.log(resultado)