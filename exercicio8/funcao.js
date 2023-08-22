


export function primo (a){
    let resposta='é primo'
    let resposta2 = 'nao é primo'
    for(let cont =  2; cont <a ; cont++){
        
        if(a % cont == 0){
           return resposta2
        }
        else if ( a== 2){
            return resposta
        }
        else{
         return    resposta
        }
        
        
    }
  
}