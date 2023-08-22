
import prompt from 'prompt-sync'
import { contagem, media} from './funaco.js'
let ler = prompt()


let nota1 = contagem()
let nota2 = contagem()
let nota3 = contagem()


let resposta = media(nota1,nota2,nota3)

console.log('media calculada ! ')
 console.log('a media é ' + resposta)