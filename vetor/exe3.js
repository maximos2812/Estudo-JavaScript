import prompt from 'prompt-sync'
let ler = prompt()

console.log('informe a quantidade de numeros a serem armezenados')
let qtd = ler()

let valores = []
for(let cont =0 ; cont < qtd; cont++){
    console.log('informe um numero')
    valores [cont] = ler()
}


console.log('numeros informados:')

for(let cont of valores){
    console.log(cont)
}
