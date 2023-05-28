function carregar(){
    var msg = document.querySelector('div#msg');
    var img = document.querySelector('img#imagem');
    var titulo = document.querySelector('h1#titulo');

    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();

    if(minuto < 10)
        msg.innerHTML = `Agora são ${hora}:0${minuto}`
    else
        msg.innerHTML = `Agora são ${hora}:${minuto}`
    

    if(hora >= 0 && hora < 12){
        img.src = 'imagens/Dia.png';
        document.body.style.background = '#e2cd9f';
        titulo.innerHTML = 'Bom dia!';

    }else if(hora >= 12 && hora < 18){
        img.src = 'imagens/Tarde.png';
        document.body.style.background = '#b9846f';
        titulo.innerHTML = 'Boa tarde!';

    }else{
        img.src = 'imagens/Noite.png';
        document.body.style.background = '#515154';
        titulo.innerHTML = 'Boa noite!';
    }
}

