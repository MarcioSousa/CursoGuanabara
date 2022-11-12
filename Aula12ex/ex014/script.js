//<div id="horario">
//alert("Olá!")
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora < 12){
        //BOM DIA!
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#e2cd9f'
    }else if(hora < 18) {
        //BOA TARDE!
        img.src = 'fototarde.jpg'
        document.body.style.background = '#b9846f'
    }else{
        //BOA NOITE!
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#515154'
    }
}

