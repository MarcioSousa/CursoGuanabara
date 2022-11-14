function verificar(){
    //window.alert('FUNCIONOU!')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    //var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        //window.alert('tudo ok')
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        //res.innerHTML = `idade calculada: ${idade} anos.`
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade < 10){
                // Criança
                img.setAttribute('src','foto-bebe-h.jpg')
            }else if(idade < 21){
                // Jovem
                img.setAttribute('src','foto-jovem-h.jpg')
            }else if(idade < 50){
                // Adulto
                img.setAttribute('src','foto-adulto-h.jpg')
            }else{
                // Idoso
                img.setAttribute('src','foto-idoso-h.jpg')
            }
        }else{
            genero = 'Mulher'
            if(idade < 10){
                // Criança
                img.setAttribute('src','foto-bebe-m.jpg')
            }else if(idade < 21){
                // Jovem
                img.setAttribute('src','foto-jovem-m.jpg')
            }else if(idade < 50){
                // Adulto
                img.setAttribute('src','foto-adulto-m.jpg')
            }else{
                // Idoso
                img.setAttribute('src','foto-idoso-m.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos.`
        res.appendChild(img)

    }

}
