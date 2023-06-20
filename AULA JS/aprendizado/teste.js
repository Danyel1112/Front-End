function contar() {
    let start = document.getElementById('txtc')
    let end = document.getElementById('txtf')
    let walk = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(start.value.length == 0 || end.value.length == 0 || walk.value.length == 0) {
        alert('Por favor insira um valor!')
        res.innerHTML = '<br>Valor inválido.'
    } else {
        res.innerHTML = 'Contando... <br>'
        let i = Number(start.value)
        let f = Number(end.value)
        let p = Number(walk.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando 1')
            p = 1
        }
        if (i < f ) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} `
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}