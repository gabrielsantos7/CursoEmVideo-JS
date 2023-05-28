let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')

let array = []

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100)
        return true
    else
        return false
}

function inList(n, l){
    if(l.indexOf(Number(n)) != -1)
        return true
    else
        return false
}

function adicionar(){
    if(isNumber(num.value) && !inList(num.value, array)){
        array.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)

        res.innerHTML = ''
    }else{
        alert('[ERRO] Valor inválido ou já adicionado na lista!')
    }

    num.value = ''
    num.focus() //direciona o cursor novamente para este campo

}

function finalizar(){
    if(array.length == 0){
        alert('[ERRO] Adicione algum valor antes de finalizar!')
    }else{
        let total = array.length
        let maior = array[0]
        let menor  = array[0]
        let soma = 0
        let media = 0

        for(let i in array){
            soma += array[i]
            if(array[i] > maior)
                maior = array[i]
            
            if(array[i] < menor)
                menor = array[i]
        }

        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número é ${maior}.</p>`
        res.innerHTML += `<p>O menor número é ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`

    }
}

