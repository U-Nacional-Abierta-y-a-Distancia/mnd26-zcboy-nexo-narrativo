# El Agua que se Hereda - Prototipo Web Interactivo

## 1. Descripción del Proyecto

"El Agua que se Hereda" es una aplicación web interactiva desarrollada para la divulgación de relatos transmedia sobre la memoria hídrica y territorial en Colombia. La plataforma integra la visualización de datos cartográficos con reproducción de audio en dos capas narrativas (Lado A: memorias históricas / Lado B: reflexiones estudiantiles), acompañadas de información técnica oficial del IDEAM.

El proyecto está diseñado bajo una arquitectura de interfaz orientada a componentes visuales simples, garantizando la navegación intuitiva y la interacción sincrónica entre la interfaz y el estado del reproductor de audio.

---

## 2. Guía de Pruebas y Evaluación de Funcionalidades

Para validar el funcionamiento del prototipo durante la evaluación, se sugiere seguir esta secuencia:

### 2.1 Carga e Interacción Cartográfica
1. Ubicar la sección del mapa interactivo en el panel derecho.
2. Hacer clic sobre cualquiera de los marcadores con animación de pulso (`.map-pin`).
3. Verificar que el evento ejecute la función `cargarHistoria()`, la cual actualiza el título, el dato del IDEAM y remueve la clase `.hidden` de la tarjeta del casete (`#casete-card`).

### 2.2 Control de Estado del Reproductor (Lado A / Lado B)
1. Seleccionar la opción **"Escucha el lado A"**. Comprobar la reproducción del archivo de audio correspondiente al relato ancestral.
2. Seleccionar la opción **"Escucha el lado B"**. Validar la activación de la transformación 3D en CSS (`rotateY(180deg)`) sobre el contenedor `#casete-box` y el cambio inmediato en la fuente del elemento `<audio>`.
3. Hacer clic en el botón de cierre (`.btn-cerrar`). Verificar que se oculte el módulo del casete y se detenga la reproducción del audio (`player.pause()`).

### 2.3 Enlaces y Galerías
1. Probar el enlace externo hacia Spotify en el botón `.btn-spotify`.
2. Verificar la visualización del carrusel de historias destacadas en el panel izquierdo.

---

## 3. Arquitectura y Tecnologías Utilizadas

El desarrollo del prototipo se realizó utilizando la pila estándar de desarrollo web (Vanilla JavaScript, HTML5 y CSS3), priorizando el rendimiento, la compatibilidad nativa de los navegadores y la ausencia de dependencias de terceros.

| Tecnología | Rol en el Proyecto |
| :--- | :--- |
| **HTML5** | Maquetación semántica del documento, inserción de elementos multimedia (`<audio>`) y estructura de marcadores interactivos. |
| **CSS3** | Layouts mediante CSS Grid y Flexbox, variables de estilo, animaciones (`@keyframes`), transformaciones 3D para el efecto del casete y diseño responsivo con Media Queries. |
| **JavaScript (ES6)** | Manejo de eventos del DOM, control de flujo del reproductor multimedia, gestión del estado de la interfaz y estructura de datos del contenido (`historias`). |
| **Google Fonts** | Integración de la fuente tipográfica 'Fredoka'. |

---

## 4. Estructura del Proyecto

```text
├── index.html              # Estructura principal y marcado semántico
├── styles.css              # Hoja de estilos globales, animaciones y media queries
├── script.js              # Lógica de negocio, eventos y estado de la aplicación
├── assets/
│   ├── images/            # Recursos gráficos (logos, mapa, elementos vectoriales)
│   └── audios/            # Archivos de audio locales organizados por zona y lado
└── README.md              # Documentación técnica del prototipo