
import prompt from 'prompt-sync'
let ler = prompt()

let nomes = []

for(let pos =0 ; pos < 5;pos++){
    console.log('informe um nome \n')
    nomes[pos] = ler()


}


for( let cont of nomes){
    console.log(cont)
}