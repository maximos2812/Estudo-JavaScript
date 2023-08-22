import prompt from 'prompt-sync'
let ler = prompt()


export function nota (a){
  
        let contador = 1
        while(a <0 ||a>10 ){
            console.log('nota invalida . ela deve estar entre 0 e 10 ')
             
             console.log('informe uma nota')
             let nota = Number(ler());
             contador --
        }
    
}