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
        if (userInput === 'Plataforma') {
            showMessage('¿Qué plataforma estás buscando? Opciones: Nintendo, PlayStation, Xbox, PC');
        } else if (userInput === 'Accesorios') {
            window.location.href = 'accesorios.html';
        } else if (['Nintendo', 'PlayStation', 'Xbox', 'PC'].includes(userInput)) {
            // Verifica si el userInput está en la lista de opciones de plataforma
            switch (userInput) {
                case 'Nintendo':
                    window.location.href = 'nintendopag.html';
                    break;
                case 'PlayStation':
                    window.location.href = 'pspag.html';
                    break;
                case 'Xbox':
                    window.location.href = 'xboxpag.html';
                    break;
                case 'PC':
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

// Seleccionamos todos los elementos que contengan la clase .image
const image = document.querySelectorAll('.image');

// creamos un ciclo for of para cada uno de nuestras imagenes del array y el .entries nos devolvera la propiedad clave:valor
for (let [i, imageSelected] of image.entries()) {
    // Luego le decimos al image seleccionado que ejecute la función focus que a su vez ejecutara el resetFocus el cual eliminara la clase active de cualquiera de las imagenes del array, luego al image seleccionado le agregara la clase active
    imageSelected.addEventListener('click', function focus(){
        resetFocus();
        imageSelected.classList.toggle('active')
    })
}

function resetFocus() {
    image.forEach(i => i.classList.remove('active'))
}