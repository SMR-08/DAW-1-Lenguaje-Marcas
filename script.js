console.log("El archivo JavaScript se ha cargado correctamente");
document.addEventListener('DOMContentLoaded', () => {
    const menuMovil = document.querySelector('.menu-movil');
    const menuNavegacion = document.querySelector('.menu-navegacion');

    menuMovil.addEventListener('click', () => {
        menuNavegacion.classList.toggle('activo');
        menuMovil.classList.toggle('activo');

        if (menuMovil.classList.contains('activo')) {
            menuMovil.setAttribute('aria-expanded', 'true');
        } else {
            menuMovil.setAttribute('aria-expanded', 'false');
        }
    });

    // Carrusel de categorías
    const contenedorCategorias = document.querySelector('.contenedor-categorias');
    const botonAnterior = document.querySelector('.carrusel-anterior');
    const botonSiguiente = document.querySelector('.carrusel-siguiente');
    let posicionActual = 0;

    function moverCarrusel(direccion) {
        const categorias = contenedorCategorias.children;
        const anchoCategoria = categorias[0].offsetWidth;
        const categoriasVisibles = Math.floor(contenedorCategorias.offsetWidth / anchoCategoria);
        const maxPosicion = categorias.length - categoriasVisibles;

        if (direccion === 'siguiente' && posicionActual < maxPosicion) {
            posicionActual++;
        } else if (direccion === 'anterior' && posicionActual > 0) {
            posicionActual--;
        }

        contenedorCategorias.style.transform = `translateX(-${posicionActual * anchoCategoria}px)`;
    }

    botonAnterior.addEventListener('click', () => moverCarrusel('anterior'));
    botonSiguiente.addEventListener('click', () => moverCarrusel('siguiente'));

    // Cargar categorías desde el PHP
    fetch('php/obtener_categorias.php')
        .then(response => response.json())
        .then(categorias => {
            // Verificar que las categorías se están recibiendo correctamente
            console.log(categorias); // Esto te ayudará a verificar que las categorías se están cargando correctamente en la consola

            categorias.forEach(categoria => {
                const categoriaElement = document.createElement('a');
                categoriaElement.href = '#';
                categoriaElement.className = 'categoria';

                // Crear el HTML para la categoría con la imagen, título y descripción
                categoriaElement.innerHTML = `
                    <img src="imagenes/${categoria.imagen}" alt="${categoria.nombre}" class="icono-categoria">
                    <span class="nombre-categoria">${categoria.nombre}</span>
                    <p class="descripcion-categoria">${categoria.descripcion}</p>
                `;

                contenedorCategorias.appendChild(categoriaElement);
            });
        })
        .catch(error => console.error('Error al cargar las categorías:', error));
});
