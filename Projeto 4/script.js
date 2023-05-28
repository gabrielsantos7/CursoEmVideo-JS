function tabuada(){
    let num = document.getElementById('txtNum');
    let tab = document.getElementById('selTab');

    if(num.value.length == 0)
        alert('Por favor, digite um número!');
    else{
        let n = Number(num.value);
        tab.innerHTML = '';
        for(let i = 0 ; i <= 10; i++){
            let item = document.createElement('option');
            item.text = `${n} X ${i} = ${i * n}`;
            tab.appendChild(item);
        }
    }
}