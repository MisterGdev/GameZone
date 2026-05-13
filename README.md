# 🎮 GameZone — Tienda de Videojuegos

Proyecto final de la tercera evaluación del módulo **Lenguaje de Marcas** del CIFP Avilés.


---

## 📋 Descripción

GameZone es una página web de una tienda de videojuegos que permite al usuario explorar un catálogo de productos y calcular el precio total de su compra mediante un carrito interactivo.

---

## 🗂️ Estructura del proyecto

```
TuApellido1_TuApellido2_TuNombre/
├── index.html      → Estructura de la página (HTML)
├── style.css       → Estilos y diseño visual (CSS)
├── script.js       → Comportamiento e interactividad (JavaScript)
├── portada.jfif    → Imagen de portada de la sección inicio
└── README.md       → Este fichero
```

---

## 🌐 Secciones de la página

### Inicio
Imagen de portada y mensaje de bienvenida a la tienda.

### Catálogo
Productos organizados en dos categorías con tarjetas visuales:

**🎮 Juegos**
| Juego | Precio |
|---|---|
| GTA 6 | 79,99 € |
| Forza Horizon 6 | 69,99 € |
| Cookie Clicker | 4,99 € |
| Indie Pack | 29,99 € |
| Minecraft | 29,99 € |

**🕹️ Accesorios**
| Accesorio | Precio |
|---|---|
| Mando Inalámbrico Pro | 69,99 € |
| Pantalla Gaming 27" 144Hz | 299,99 € |
| Teclado Mecánico RGB | 89,99 € |
| Cascos Gaming con Micrófono | 79,99 € |

### Carrito de Compra
Formulario interactivo para añadir productos al carrito, ver el desglose y calcular el total con IVA.

### Contacto
Formulario con nombre, email y mensaje. Muestra confirmación sin recargar la página.

---

## ⚙️ Funcionalidades JavaScript

| Función | Descripción |
|---|---|
| `actualizarVisibilidadPlataforma()` | Muestra u oculta el selector de plataforma según si el producto elegido es un juego o un accesorio |
| `añadirAlCarrito(event)` | Recoge los datos del formulario y añade un artículo al array `carrito[]` |
| `actualizarVistaCarrito()` | Recorre el array y dibuja las líneas del carrito en pantalla |
| `eliminarArticulo(indice)` | Elimina un artículo del array por su posición con `splice()` |
| `vaciarCarrito()` | Vacía el array completo y oculta el carrito |
| `calcularTotal()` | Suma los subtotales, aplica el IVA (21%) y muestra el desglose final |
| `enviarContacto(event)` | Muestra el mensaje de confirmación sin recargar la página |

---

## 🧠 Conceptos clave utilizados

- **`document.getElementById()`** — Acceder a elementos del DOM por su id
- **`addEventListener('change', ...)`** — Vigilar cambios en un elemento sin usar onclick en el HTML
- **`parentNode.label`** — Leer el grupo (`optgroup`) al que pertenece un `option` seleccionado
- **`parseFloat()` / `parseInt()`** — Convertir texto a número para poder hacer operaciones matemáticas
- **`event.preventDefault()`** — Evitar que el formulario recargue la página al enviarse
- **`toFixed(2)`** — Formatear precios con exactamente dos decimales
- **`push()` / `splice()`** — Añadir y eliminar elementos de un array
- **`createElement()` / `appendChild()`** — Crear elementos HTML desde JavaScript y añadirlos al DOM
- **CSS Grid** — Organizar las tarjetas del catálogo en columnas
- **`display: none` / `display: block`** — Mostrar y ocultar elementos desde JavaScript
- **`@media`** — Hacer la página responsive para móvil y tablet

---

## 📱 Responsive

La página se adapta a tres tamaños de pantalla:

- **Escritorio** (>1024px): catálogo en 3 columnas
- **Tablet** (768px–1024px): catálogo en 2 columnas
- **Móvil** (<768px): catálogo en 1 columna, menú en columna

---

## 🚀 Despliegue en GitHub Pages

La página está disponible en:  
👉 `https://mistergdev.github.io/GameZone/`

### Pasos para desplegarlo tú mismo

1. Sube los ficheros a un repositorio de GitHub
2. Ve a **Settings → Pages**
3. En **Source** selecciona la rama `main` y la carpeta `/root`
4. Pulsa **Save** — en unos minutos tendrás la URL activa

---

## 🛠️ Cómo ejecutarlo en local

1. Clona o descarga el repositorio
2. Abre la carpeta en **Visual Studio Code**
3. Instala la extensión **Live Server**
4. Clic derecho sobre `index.html` → **Open with Live Server**

---

## 📌 Tecnologías utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## 👤 Autor

**Adrián Rodríguez Fernández**  
Módulo: Lenguaje de Marcas · Tercera Evaluación · Curso 2025–2026
