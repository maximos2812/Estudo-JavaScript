

export function sequencia(a){
  let atual=1
  let ant
for(let contador= 2;contador <=a;contador++){
    let ox= atual
    atual = atual + ant
    ant = ant + atual
}
console.log(atual)

}