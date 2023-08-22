
import prompt from 'prompt-sync'
let ler = prompt()

console.log('informe a tabuada que deseja')
let valor  = Number(ler())
let tabuada = []

for(let mult =0 ; mult <=10 ; mult++){
    tabuada[mult] = mult * valor
}

for(let cont of tabuada){
    console.log(cont)
}