setTimeout(()=>{
    let newmessage='<div class="message"><img class="imgChat" src="./img/chat-dots.svg" alt=""><div class="pChat"><p>!Hola¡ Bienvenido a Level Up</p></div></div><div class="message"><img class="imgChat" src="./img/chat-dots.svg" alt=""><div class="pChat"><ol><li>Quiero comprar juegos</li><li>Quiero comprar accesorios</li><li>Quiero comprar ambas cosas</li></ol></div></div>'
    const chat=document.querySelector('.chatG')
    chat.innerHTML=newmessage
},2000)
