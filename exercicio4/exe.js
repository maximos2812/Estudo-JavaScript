
import prompt from 'prompt-sync'
import { sifra } from './funcao.js'
let ler = prompt()

console.log('infrome uma frase')
let text = ler()

let resultado= sifra(text)
console.log(resultado)