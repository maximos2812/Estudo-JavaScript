import prompt from 'prompt-sync'
let ler = prompt()


console.log('inoforme a quantidade de numeros  a serem adcionados')
let qtd = ler()
let valores =[]


for(let cont = 0 ; cont <=qtd; cont++){
    console.log('informe um numero')
    valores [cont] = ler()

}

console.log('voce digitou os numeros :')

for(let contador = qtd ; contador >=0 ; contador--){
    console.log(valores[contador])
}
