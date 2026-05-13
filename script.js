// =============================================
// SCRIPT.JS Tienda de videojuegos GameZone
// =============================================


// ========== VISIBILIDAD DEL SELECTOR DE PLATAFORMA ==========

// Esta función comprueba a qué grupo pertenece el producto seleccionado
// y muestra u oculta el bloque de plataforma en consecuencia
function actualizarVisibilidadPlataforma() {

    // Referencia al select de productos
    var selectProducto = document.getElementById('juego');

    // parentNode nos da el optgroup al que pertenece la opción seleccionada
    // .label es el texto que pusimos en el atributo label del optgroup
    var grupo = selectProducto.options[selectProducto.selectedIndex].parentNode.label;

    // Referencia al div que envuelve label + select de plataforma
    var bloquePlataforma = document.getElementById('bloque-plataforma');

    // Si el grupo contiene "Juegos" mostramos el selector, si no lo ocultamos
    // includes() comprueba si un texto contiene otra cadena de texto
    if (grupo.includes('Juegos')) {
        bloquePlataforma.style.display = 'block';
    } else {
        bloquePlataforma.style.display = 'none';
    }
}

// addEventListener('change', ...) observa el select de productos
// Cada vez que el usuario cambia la selección, llama a actualizarVisibilidadPlataforma
document.getElementById('juego').addEventListener('change', actualizarVisibilidadPlataforma);

// Llamamos a la función una vez al cargar la página para que el estado inicial sea correcto
// (el primer producto es un juego, así que la plataforma debe aparecer desde el principio)
actualizarVisibilidadPlataforma();


// ========== CARRITO ==========

// Este array es nuestro "almacén" del carrito en memoria
// Cada vez que el usuario añade un artículo, guardamos un objeto aquí dentro
// Ejemplo de cómo queda cada objeto: { nombre: "Minecraft", precio: 29.99, cantidad: 2, plataforma: "PS5" }
var carrito = [];


// ========== FUNCIÓN: AÑADIR AL CARRITO ==========

// Se ejecuta al hacer clic en "Añadir al carrito"
function añadirAlCarrito(event) {

    // Evita que el formulario recargue la página
    event.preventDefault();

    // Recogemos el precio del juego seleccionado
    // parseFloat convierte el texto "59.99" en el número 59.99
    var precio = parseFloat(document.getElementById('juego').value);

    // Recogemos la cantidad introducida
    // parseInt convierte el texto "2" en el número entero 2
    var cantidad = parseInt(document.getElementById('cantidad').value);

    // Recogemos el texto visible del juego seleccionado (lo que ve el usuario)
    // options es la lista de opciones del select
    // selectedIndex es el número de la opción que está seleccionada ahora mismo
    var selectJuego = document.getElementById('juego');
    var nombreJuego = selectJuego.options[selectJuego.selectedIndex].text;

    // Recogemos la plataforma seleccionada de la misma forma
    var selectPlataforma = document.getElementById('plataforma');
    var plataforma = selectPlataforma.options[selectPlataforma.selectedIndex].text;

    // Validamos que la cantidad sea un número válido y mayor que 0
    // Number() convierte el valor a número de forma estricta
    // Number.isFinite() devuelve false si el resultado es NaN, Infinity o no es un número real
    // Esto es más seguro que isNaN(), que tiene comportamientos extraños con arrays y otros valores
    var num = Number(cantidad);
    if (!Number.isFinite(num) || num <= 0) {
        alert('Por favor, introduce una cantidad válida.');
        return; // Salimos sin añadir nada al carrito
    }

    // Creamos un objeto con los datos de este artículo
    // Un objeto en JS es como una ficha con varios campos
    var articulo = {
        nombre: nombreJuego,       // Nombre del juego
        precio: precio,            // Precio unitario
        cantidad: cantidad,        // Unidades
        plataforma: plataforma     // Plataforma elegida
    };

    // Añadimos el objeto al final del array carrito
    // push() es el método de los arrays para añadir elementos al final
    carrito.push(articulo);

    // Actualizamos la vista del carrito en pantalla
    actualizarVistaCarrito();

    // Ocultamos el resultado anterior si lo había, porque el carrito ha cambiado
    document.getElementById('resultado').style.display = 'none';
}


// ========== FUNCIÓN: ACTUALIZAR LA VISTA DEL CARRITO ==========

// Esta función recorre el array carrito y dibuja las líneas en pantalla
// Se llama cada vez que se añade o elimina un artículo
function actualizarVistaCarrito() {

    // Referencia al div donde se pintan las líneas del carrito
    var listaCarrito = document.getElementById('lista-carrito');

    // Si el carrito está vacío, ocultamos el bloque entero y salimos
    if (carrito.length === 0) {
        document.getElementById('carrito').style.display = 'none';
        document.getElementById('resultado').style.display = 'none';
        return;
    }

    // Si hay artículos, mostramos el bloque del carrito
    document.getElementById('carrito').style.display = 'block';

    // Vaciamos el contenido actual del div antes de volver a dibujarlo
    // Si no lo vaciamos, cada actualización añadiría líneas duplicadas
    listaCarrito.innerHTML = '';

    // Recorremos cada artículo del array con un bucle for
    for (var i = 0; i < carrito.length; i++) {

        // Calculamos el subtotal de esta línea: precio unitario × cantidad
        var subtotal = (carrito[i].precio * carrito[i].cantidad).toFixed(2);

        // Creamos un nuevo div para esta línea del carrito
        var linea = document.createElement('div');
        linea.className = 'linea-carrito'; // Le ponemos la clase CSS

        // Escribimos el HTML de la línea con los datos del artículo
        // El botón de eliminar llama a eliminarArticulo(i) pasándole el índice
        linea.innerHTML =
            '<span>' + carrito[i].nombre + ' · ' + carrito[i].plataforma +
            ' · x' + carrito[i].cantidad + ' · ' + subtotal + ' €</span>' +
            '<button class="boton-eliminar" onclick="eliminarArticulo(' + i + ')">✕ Eliminar</button>';

        // Añadimos la línea al div del carrito
        listaCarrito.appendChild(linea);
    }
}


// ========== FUNCIÓN: ELIMINAR UN ARTÍCULO ==========

// Se ejecuta al hacer clic en el botón "Eliminar" de una línea
// Recibe el índice del artículo dentro del array carrito
function eliminarArticulo(indice) {

    // splice() elimina 1 elemento del array en la posición indicada
    // El primer parámetro es desde dónde empezar
    // El segundo parámetro es cuántos elementos eliminar
    carrito.splice(indice, 1);

    // Volvemos a dibujar el carrito con el artículo ya eliminado
    actualizarVistaCarrito();

    // Ocultamos el resultado porque el carrito ha cambiado
    document.getElementById('resultado').style.display = 'none';
}


// ========== FUNCIÓN: VACIAR EL CARRITO ==========

// Se ejecuta al hacer clic en "Vaciar carrito"
function vaciarCarrito() {

    // Vaciamos el array: length = 0 borra todos los elementos
    carrito = [];

    // Actualizamos la vista (ocultará el carrito al estar vacío)
    actualizarVistaCarrito();
}


// ========== FUNCIÓN: CALCULAR EL TOTAL ==========

// Se ejecuta al hacer clic en "Calcular precio total"
function calcularTotal() {

    // Comprobamos que haya artículos en el carrito
    if (carrito.length === 0) {
        alert('El carrito está vacío.');
        return;
    }

    // Calculamos el precio base sumando el subtotal de cada artículo
    // Empezamos con precioBase a 0 y vamos sumando en el bucle
    var precioBase = 0;

    for (var i = 0; i < carrito.length; i++) {
        // Sumamos precio unitario × cantidad de cada artículo
        precioBase = precioBase + (carrito[i].precio * carrito[i].cantidad);
    }

    // Calculamos el IVA (21%)
    var importeIva = precioBase * 0.21;

    // Precio total con IVA incluido
    var precioTotal = precioBase + importeIva;

    // toFixed(2) para que salgan siempre 2 decimales en los precios
    var precioBaseFormateado = precioBase.toFixed(2);
    var importeIvaFormateado = importeIva.toFixed(2);
    var precioTotalFormateado = precioTotal.toFixed(2);

    // Construimos el desglose línea a línea para mostrarlo en el resultado
    // Empezamos con la cabecera
    var desglose = '<h3>🧾 Desglose del pedido</h3>';

    for (var i = 0; i < carrito.length; i++) {
        var subtotal = (carrito[i].precio * carrito[i].cantidad).toFixed(2);
        desglose = desglose +
            '<p>' + carrito[i].nombre + ' · ' + carrito[i].plataforma +
            ' · x' + carrito[i].cantidad + ': ' + subtotal + ' €</p>';
    }

    // Añadimos el resumen final con IVA
    desglose = desglose +
        '<hr style="border-color:#7c3aed; margin:10px 0;">' +
        '<p><strong>Precio base:</strong> ' + precioBaseFormateado + ' €</p>' +
        '<p><strong>IVA (21%):</strong> ' + importeIvaFormateado + ' €</p>' +
        '<p style="font-size:20px; color:#7c3aed; font-weight:bold;">TOTAL: ' + precioTotalFormateado + ' €</p>';

    // Mostramos el div resultado y escribimos el desglose dentro
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('resultado').innerHTML = desglose;
}


// ========== FUNCIÓN DEL FORMULARIO DE CONTACTO ==========

// Se ejecuta al hacer clic en "Enviar mensaje"
function enviarContacto(event) {

    // Evita que el formulario recargue la página
    event.preventDefault();

    // Recogemos el nombre del usuario
    var nombre = document.getElementById('nombre').value;

    // Mostramos el div de confirmación y escribimos el mensaje
    document.getElementById('confirmacion-contacto').style.display = 'block';
    document.getElementById('confirmacion-contacto').innerHTML =
        '✅ ¡Gracias, ' + nombre + '! Tu mensaje ha sido enviado correctamente. Te responderemos en 24 horas.';

    // Limpiamos el formulario después de enviarlo
    document.getElementById('formulario-contacto').reset();
}