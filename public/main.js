var socket = io()

const enviar = document.getElementById('enviar');

enviar.addEventListener('click', ()=>{
    var mensaje = document.getElementById('texto');
    var name = document.getElementById('username').value
    
    var objMss = {
        mensaje: mensaje.value,
        name 
    }

    if(mensaje.value != ''){
        socket.emit('nuevo mensaje', objMss);
        mensaje.value = '';
    }else{
        alert('No puede enviar un mensaje vacio');
    }
})

socket.on('nuevo mensaje servidor', data => {
    var lista_mensajes = document.getElementById('messages');
    var html = `<strong>${data.name}:</strong> ${data.mensaje}`;
    var div = document.createElement("div");
    div.classList.add("card-panel")
    div.classList.add("messages")
    div.innerHTML = html
    lista_mensajes.appendChild(div)
})

 