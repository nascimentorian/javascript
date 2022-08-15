function carregar(){
    var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
var segundos = data.getSeconds()

msg.innerHTML = `Agora são ${hora} horas. `

if (hora >= 0 && hora < 12){
    img.src = 'manhã2.png'
    document.body.style.background = '#e2cd9f'
} else if (hora >= 12 && hora  <= 18){
    img.src = 'tarde2.png'
    document.body.style.background = '#b9846f'
} else {
    img.src = 'noite2.png'
    document.body.style.background = '#515154'
}
}
