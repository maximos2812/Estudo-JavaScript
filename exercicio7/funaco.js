  import prompt from 'prompt-sync'
       let ler = prompt()

export function contagem(){
       console.log('informe uma nota')
           let  nota = Number(ler())


           
              while(nota <0 || nota>10){
                console.log('nota invalida. ela deve estar entre 0 e 10')
                console.log('informe uma nota')
                nota= Number(ler())
                
      }
      return nota
}
   export function media (a,b,c){
    let x = (a + b+ c)/3
    return x
   }
  
