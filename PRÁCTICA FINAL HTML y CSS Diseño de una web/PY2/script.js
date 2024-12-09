// Función para validar el formulario
function validarFormulario(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const terminos = document.getElementById('terminos').checked;
    
    if (nombre.trim() === '') {
        alert('Por favor, ingrese su nombre.');
        return;
    }
    
    if (edad < 18 || edad > 120) {
        alert('Por favor, ingrese una edad válida entre 18 y 120 años.');
        return;
    }
    
    if (!terminos) {
        alert('Debe aceptar los términos y condiciones.');
        return;
    }
    
    alert('Formulario enviado correctamente.');
    document.getElementById('formulario-ejemplo').reset();
}

// Agregar evento de envío al formulario
document.getElementById('formulario-ejemplo').addEventListener('submit', validarFormulario);

// Función para cambiar el color de fondo de las secciones al hacer clic
function cambiarColorFondo(event) {
    if (event.target.tagName === 'H2') {
        const seccion = event.target.parentElement;
        const colorAleatorio = Math.floor(Math.random()*16777215).toString(16);
        seccion.style.backgroundColor = "#" + colorAleatorio;
    }
}

// Agregar evento de clic a todas las secciones
document.querySelectorAll('section').forEach(seccion => {
    seccion.addEventListener('click', cambiarColorFondo);
});

// Función para mostrar un mensaje de bienvenida
function mostrarBienvenida() {
    const ahora = new Date();
    const hora = ahora.getHours();
    let saludo;
    
    if (hora < 12) {
        saludo = "Buenos días";
    } else if (hora < 18) {
        saludo = "Buenas tardes";
    } else {
        saludo = "Buenas noches";
    }
    
    alert(`${saludo} y bienvenido a Labs. ¡Esperamos que disfrutes aprendiendo!`);
}

// Mostrar mensaje de bienvenida al cargar la página
window.addEventListener('load', mostrarBienvenida);

