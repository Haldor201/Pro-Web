document.addEventListener("DOMContentLoaded", function() {
    const output = document.getElementById('output');
    const input = document.getElementById('input');

    function showMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerText = message;
        output.appendChild(messageElement);
    }

    function handleUserInput(userInput) {
        console.log(userInput.toLowerCase());
        if (userInput.toLowerCase() === 'Plataforma'.toLowerCase()) {
            showMessage('¿Qué plataforma estás buscando? Opciones: Nintendo, PlayStation, Xbox, PC');
        } else if (userInput.toLowerCase() === 'Accesorios'.toLowerCase()) {
            window.location.href = 'accesorios.html';
        } else if (['nintendo', 'playstation', 'xbox', 'pc'].includes(userInput.toLowerCase())) {
            // Verifica si el userInput está en la lista de opciones de plataforma
            switch (userInput.toLowerCase()) {
                case 'Nintendo'.toLowerCase():
                    window.location.href = 'nintendopag.html';
                    break;
                case 'PlayStation'.toLowerCase():
                    window.location.href = 'pspag.html';
                    break;
                case 'Xbox'.toLowerCase():
                    window.location.href = 'xboxpag.html';
                    break;
                case 'PC'.toLowerCase():
                    window.location.href = 'pcpag.html';
                    break;
                default:
                    showMessage('Lo siento, no entiendo esa opción.');
            }
        } else {
            showMessage('Lo siento, no entiendo esa opción.');
        }
    }

    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const userInput = input.value.trim();
            if (userInput !== '') {
                showMessage(`Usuario: ${userInput}`);
                handleUserInput(userInput);
                input.value = '';
            }
        }
    });

    showMessage('¿Qué categoría estás buscando? Opciones: Plataforma, Accesorios');
});

const image = document.querySelectorAll('.image');

for (let [i, imageSelected] of image.entries()) {
   
    imageSelected.addEventListener('click', function focus(){
        resetFocus();
        imageSelected.classList.toggle('active')
    })
}

function resetFocus() {
    image.forEach(i => i.classList.remove('active'))
}