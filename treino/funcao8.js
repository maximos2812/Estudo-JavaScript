

export function primo(a){


if(a <2){
    console.log('nao é primo')
}



for ( let contador =2 ;contador < a;contador++){
    if(a % contador == 0){
        console.log('nao é primo')
    }
    else{
        console.log('é primo')
    }

}
}