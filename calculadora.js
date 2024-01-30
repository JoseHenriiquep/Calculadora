var res = document.getElementById('resultado')
function insert(n){
    res.innerHTML += n
}

function clean(){
    res.innerHTML = ''
}

function backspace(){
    var res = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = res.substring(0, res.length -1)
}

function calcular(){
    var res = document.getElementById('resultado').innerHTML
    if (res) {
        document.getElementById('resultado').innerHTML = eval(res)
    } else {
        alert('Nada para calcular!')
    }
}