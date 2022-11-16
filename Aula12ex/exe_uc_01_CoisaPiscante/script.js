
function alternarcor(){
    var tempo = 20

    retornarterceiracor(255, tempo)

    window.alert("Finalizou!")

}

function retornarterceiracor(c, tempo){
    setTimeout(() => {
        document.getElementById('fundo').style.background = "rgb(255, 255, " + c + ")"
        if(c < 0){
            retornarsegundacor(255, tempo)
        }else{
            c--
            retornarterceiracor(c, tempo)
            return
        }
    }, tempo); 
}

function retornarsegundacor(c, tempo){
    setTimeout(() => {
        document.getElementById('fundo').style.background = "rgb(255, " + c + ", 0)"
        if(c < 0){
            retornarprimeiracor(255, tempo)
        }else{
            c--
            retornarsegundacor(c, tempo)
            return
        }
    }, tempo); 
}

function retornarprimeiracor(c, tempo){
    setTimeout(() => {
        document.getElementById('fundo').style.background = "rgb(" + c + ", 0, 0)"
        if(c < 0){
            c = 0
            retornarprimeiracormaior(c, tempo)
        }else{
            c--
            retornarprimeiracor(c, tempo)
            return
        }
    }, tempo); 
}

function retornarprimeiracormaior(c, tempo){
    setTimeout(() => {
        document.getElementById('fundo').style.background = "rgb(" + c + ", 0, 0)"
        if(c > 255){
            c = 0
            retornarsegundacormaior(c, tempo)
        }else{
            c++
            retornarprimeiracormaior(c, tempo)
            return
        }
    }, tempo); 
}

function retornarsegundacormaior(c, tempo){
    setTimeout(() => {
        document.getElementById('fundo').style.background = "rgb(255, " + c + ", 0)"
        if(c > 255){
            c = 0
            retornarterceiracormaior(c, tempo)
        }else{
            c++
            retornarsegundacormaior(c, tempo)
            return
        }
    }, tempo); 
}

function retornarterceiracormaior(c, tempo){
    setTimeout(() => {
        document.getElementById('fundo').style.background = "rgb(255, 255, " + c + ")"
        if(c > 255){
            return
        }else{
            c++
            retornarterceiracormaior(c, tempo)
            return
        }
    }, tempo); 
}