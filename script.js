function carregar(){

     var msg =document.getElementById('msg')
     var titulo= document.getElementById('titulo')
     var img = document.getElementById('img')
     var agora= new Date()
     var hora = agora.getHours()
     //var hora =6
     var minutos =agora.getMinutes()
     msg.innerText =(`agora são ${hora}:${minutos}`)

 if (hora >=0 && hora < 12)  {
 //bom dia !!
 img.src = 'fotomanha.png'
 titulo.innerHTML='Bom dia!'
 document.body.style.backgroundColor= '#D168F2'


 } else if (hora >= 12 && hora <18){
 //boa tarde !!
 img.src = 'fototarde.png'
 titulo.innerHTML='Boa tarde!'
 document.body.style.backgroundColor= '#EB7026'

 } else {
    //boa noite!!
 img.src = 'fotonoite.png'
 titulo.innerHTML='Boa noite!'
 }
}
