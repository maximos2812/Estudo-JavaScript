import prompt from 'prompt-sync'
let ler  = prompt()

export function msg(){
    
    console.log('informe a nota')
    let nota  =Number(ler())

   while( nota >10 || nota <0){
    console.log('nota invalida . ela deve estar entre 10 e 0')
     nota= Number(ler())
   }
   return  nota
}


export function media(a,b,c){

    let x = (a+b+c)/3
    return x
    
}
