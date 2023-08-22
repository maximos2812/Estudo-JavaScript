//Implementar uma função que calcule o valor da mensalidade que um aluno de uma faculdade de tecnologia deve pagar, 
//a partir da sigla do curso, se é isento (sim ou não) e do desconto (em %) que ele possui. Abaixo está o valor da 
//mensalidade para cada curso:
// - SI  (Sistemas de Informação)        = R$  550,00
// - ADS (Análise e Desenv. de Sistemas) = R$  750,00
// - CS  (Ciência da Computação)         = R$ 1150,00
// - EC  (Engenharia da Computação)      = R$ 1300,00
// - ES  (Engenharia de Software)        = R$  950,00

import { valor } from './funcao.js'
import prompt from 'prompt-sync'
let ler = prompt()

console.log('infrome a sigla da faculdade  que deseja realiar')
let faculdade = ler()

console.log('infrome a quantidade de desconto em porcentagem')
let porcentagem =Number(ler())

let resultado = valor(faculdade,porcentagem)

console.log(resultado )