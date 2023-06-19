function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min  = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    if (hora >= 6 && hora < 12) {
        img.src = 'Manhã.png' 
        document.body.style.background = '#fcc603'
    } else if (hora >= 12 && hora < 18) { 
        img.src = 'Tarde.png'
        document.body.style.background = '#d98b2b'
    }else{ 
        img.src = 'Noite.png'
        document.body.style.background = '#06154a'
    }
    
        


    



}


