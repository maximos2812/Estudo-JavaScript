

import prompt from 'prompt-sync';
import { palindromo } from './funcao6.js';
let ler = prompt()

console.log('informe uma frase')
let text = ler()

palindromo(text)