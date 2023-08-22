


// Implementar uma função que calcule o valor da mensalidade que um aluno de uma faculdade de tecnologia deve pagar,
// // a partir da sigla do curso, se é isento (sim ou não) e do desconto (em %) que ele possui. Abaixo está
// // o valor da mensalidade para cada curso:
// - SI  (Sistemas de Informação)        = R$  550,00
// - ADS (Análise e Desenv. de Sistemas) = R$  750,00
// - CS  (Ciência da Computação)         = R$ 1150,00
// - EC  (Engenharia da Computação)      = R$ 1300,00
// - ES  (Engenharia de Software)        = R$  950,00


export function valor(a,b) {
    let x  =''
    if(a == 'SI'&& b <=99 ){
        x = 'o  total a se pagar na faculade escolhida , ja adicionando o valor do desconto é '+ (550/b)*100  .toFixed(4)
    }
    else if (a=='ADS'&& b <=99){
        x = 'o  total a se pagar na faculade escolhida , ja adicionando o valor do desconto  é ' + (750/b)*100  .toFixed(4)
    }
    else if (a=='CS'&& b <=99){
        x = 'o  total a se pagar na faculade escolhida , ja adicionando o valor do desconto é '+(1150/b)*100  .toFixed(4)
    }
    else if (a=='EC'&& b <=99){
        x ='o  total a se pagar na faculade escolhida , ja adicionando o valor do desconto é ' + (1300/b)*100  .toFixed(4)
    }
    else if(a=='ES'&& b <=99){
        x ='o  total a se pagar na faculade escolhida , ja adicionando o valor do desconto é '+ (950/b)*100 .toFixed(4)
    }
    else {
        x = 'insento'
    }
    return x
}