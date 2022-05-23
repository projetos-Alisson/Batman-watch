

var saudar = document.getElementById('saudar')
var data = new Date()
var hora = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds()
var nome = window.prompt('Olá Visitante, qual é o seu nome?')

if (hora <= '11:59:59') {
    saudar.innerHTML = `<p>Bom Dia, <strong>${nome}</strong> !</p>`
} else if (hora <= '17:59:59') {
    saudar.innerHTML = `<p>Boa Tarde, <strong>${nome}</strong> !</p>`
} else if (hora <= '23:59:59') {
    saudar.innerHTML = `<p>Boa Noite, <strong>${nome}</strong></p>`
} else {
    saudar.innerHTML = `<p>Ja é madrugada, <strong>${nome}</strong>.</p>`
}

function diaSemana() {

    var relogio = document.getElementById('relogio')
    var data = new Date()
    var diaSemana = data.getDay()

    switch (diaSemana) {

        case 0:
            relogio.innerHTML = 'Domingo'
            break
        case 1:
            relogio.innerHTML = 'Segunda-Feira'
            break
        case 2:
            relogio.innerHTML = 'Terça-Feira'
            break
        case 3:
            relogio.innerHTML = 'Quarta-Feira'
            break
        case 4:
            relogio.innerHTML = 'Quinta-Feira'
            break
        case 5:
            relogio.innerHTML = 'Sexta-Feira'
            break
        case 6:
            relogio.innerHTML = 'Sábado'
            break
    }
}

function relogio() {

    var data = new Date()
    var horas = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()

    if (horas < 10) {
        horas = '0' + horas
    } else if (minutos < 10) {
        minutos = '0' + minutos
    } else if (segundos < 10) {
        segundos = '0' + segundos
    }
    document.querySelector('#relogio').innerHTML = horas + ':' + minutos + ':' + segundos

}
window.setInterval('relogio()', 1000)
