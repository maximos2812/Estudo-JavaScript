
import prompt from 'prompt-sync'
let ler = prompt()

let numeros = []

for(let cont = 0 ; cont <5; cont ++){
    console.log(' informe um numero \n')

    numeros[cont]=ler()
}


for(let pos of numeros){
    console.log(pos)
}