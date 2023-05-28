function contar() {
    let inicio = document.getElementById('txtInicio');
    let fim = document.getElementById('txtFim');
    let passo = document.getElementById('txtPasso');
    let res = document.getElementById('res');

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] Preencha todos os campos para avançar!');
        res.innerHTML = 'Impossível contar!'
        //inicio.value = '', fim.value = '', passo.value = ''; // deixa todos os campos vazios novamente
    }else if(Number(passo.value) <= 0){
        alert('[ERRO] O valor de Passo não pode ser zero nem valor negativo!');
        res.innerHTML = 'Impossível contar!'
    }
    else{
        res.innerHTML = `Contando: <br>`;
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if(i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1f449} `;
            }
        }else{
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1f449} `;
            }
        }
        

        res.innerHTML += `\u{1f6a9}`
    }
}