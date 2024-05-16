let newmessage='<div class="message"><img class="imgChat" src="./img/chat-dots.svg" alt=""><div class="pChat"><p>!Hola¡ Bienvenido a Level Up</p></div></div><div class="message"><img class="imgChat" src="./img/chat-dots.svg" alt=""><div class="pChat"><ol><li>Quiero comprar juegos</li><li>Quiero comprar accesorios</li><li>Quiero comprar ambas cosas</li></ol></div></div>'
const chat=document.querySelector('.chatG')
chat.innerHTML=newmessage

let opciones=document.getElementsByClassName('opciones')
op=[...opciones]
for(let i=0;i<op.length;i++){
    op[i].addEventListener('click',()=>{
        if(op[i].textContent==="1"){
            newmessage='<div class="message"><img class="imgChat" src="./img/chat-dots.svg" alt=""><div class="pChat"><p>Tenemos mucha variedad de juegos disponibles</p></div></div><div class="message"><img class="imgChat" src="./img/chat-dots.svg" alt=""><div class="pChat"><ol><li>Quiero comprar juegos</li><li>Quiero comprar accesorios</li><li>Quiero comprar ambas cosas</li></ol></div></div>'
            chat.innerHTML=newmessage
        }else if(op[i].textContent==="2"){  
            newmessage='<div class="message"><img class="imgChat" src="./img/chat-dots.svg" alt=""><div class="pChat"><p>Contamos con muchos accesorios para tu PC y tambien mandos de consola</p></div></div><div class="message"><img class="imgChat" src="./img/chat-dots.svg" alt=""><div class="pChat"><ol><li>Quiero comprar juegos</li><li>Quiero comprar accesorios</li><li>Quiero comprar ambas cosas</li></ol></div></div>'
            chat.innerHTML=newmessage
        }else{
            newmessage='<div class="message"><img class="imgChat" src="./img/chat-dots.svg" alt=""><div class="pChat"><p>Muy buena opción, tenemos mucha variedad</p></div></div><div class="message"><img class="imgChat" src="./img/chat-dots.svg" alt=""><div class="pChat"><ol><li>Quiero comprar juegos</li><li>Quiero comprar accesorios</li><li>Quiero comprar ambas cosas</li></ol></div></div>'
            chat.innerHTML=newmessage
        }
    })
}