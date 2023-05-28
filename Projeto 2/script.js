function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var formAno = document.getElementById('txtAno');
    var res = document.getElementById('res');

    if(formAno.value.length == 0 || Number(formAno.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!');
        formAno.value = '';

    }else{
        var formSexo = document.getElementsByName('radSex');
        var idade = ano - Number(formAno.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        img.setAttribute('height', '250px' );

        if(formSexo[0].checked){
            genero = 'pessoa do sexo Masculino';

            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'Imagens/CriancaM.png');
            }else if(idade < 21){
                img.setAttribute('src', 'Imagens/AdolescenteM.png');
            }else if(idade < 50){
                img.setAttribute('src', 'Imagens/AdultoM.png');
            }else{
                img.setAttribute('src', 'Imagens/IdosoM.png');
            }

        }else if(formSexo[1].checked){
            genero = 'pessoa do sexo Feminino';

            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'Imagens/CriancaF.png');
            }else if(idade < 21){
                img.setAttribute('src', 'Imagens/AdolescenteF.png');
            }else if(idade < 50){
                img.setAttribute('src', 'Imagens/AdultoF.png');
            }else{
                img.setAttribute('src', 'Imagens/IdosoF.png');
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
        
}