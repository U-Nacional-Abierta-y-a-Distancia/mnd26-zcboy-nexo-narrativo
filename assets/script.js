const historias = {
  'zona-1': {
    titulo: "Historias del Apagón del 92",
    ladoA: { audio: "assets/audios/zona1-a.mp3", info: "Lado A: El origen del acueducto rural" },
    ladoB: { audio: "assets/audios/zona1-b.mp3", info: "Lado B: La cuenca protegida" },
    datoIdeam: "Dato IDEAM: Precipitación estable en la zona alta."
  },
  'zona-2': {
    titulo: "Memorias del Humedal",
    ladoA: { audio: "assets/audios/zona2-a.mp3", info: "Lado A: Aves migratorias y agua" },
    ladoB: { audio: "assets/audios/zona2-b.mp3", info: "Lado B: La restauración del ecosistema" },
    datoIdeam: "Dato IDEAM: Monitoreo constante de calidad hídrica."
  },
  'zona-3': {
    titulo: "El Canal de la Quebrada",
    ladoA: { audio: "assets/audios/zona3-a.mp3", info: "Lado A: La antigua lavandería comunitaria" },
    ladoB: { audio: "assets/audios/zona3-b.mp3", info: "Lado B: Mitigación de sequías" },
    datoIdeam: "Dato IDEAM: Reducción del nivel en temporadas secas."
  },
  'centro': {
    titulo: "Laura y su abuelo Pedro",
    ladoA: { audio: "assets/audios/centro-a.mp3", info: "Lado A: La vida junto al río del centro" },
    ladoB: { audio: "assets/audios/centro-b.mp3", info: "Lado B: Los racionamientos del pasado" },
    datoIdeam: "Dato IDEAM: Consumo promedio registrado: 60L por persona."
  }
};

let zonaActual = 'centro';
let ladoActual = 'A'; // Guarda el lado que está activo actualmente

const player = document.getElementById('audio-player');
const caseteBox = document.getElementById('casete-box');
const caseteCard = document.getElementById('casete-card');

// Cargar historia desde el mapa
function cargarHistoria(zona) {
  if (!historias[zona]) return;
  
  zonaActual = zona;
  
  // Detener audio previo si existe
  if (player) {
    player.pause();
  }

  // Reiniciar siempre al Lado A al abrir un punto nuevo
  ladoActual = 'A';
  if (caseteBox) {
    caseteBox.classList.remove('girado');
  }

  // Actualizar títulos
  document.getElementById('titulo-historia').innerText = historias[zona].titulo;
  document.getElementById('leyenda-dato').innerText = historias[zona].datoIdeam;
  
  // Mostrar la tarjeta
  caseteCard.classList.remove('hidden');
}

// Ocultar la tarjeta y pausar audio al dar clic en 'X'
function cerrarCasete() {
  caseteCard.classList.add('hidden');
  if (player) {
    player.pause();
  }
}

// Reproducir Lado A o Lado B
function reproducirLado(lado) {
  // 1. Si presionan el Lado B y actualmente estamos en el Lado A -> Gira al Lado B
  if (lado === 'B' && ladoActual !== 'B') {
    caseteBox.classList.add('girado');
    ladoActual = 'B';
  } 
  // 2. Si presionan el Lado A y actualmente estamos en el Lado B -> Gira de vuelta al Lado A
  else if (lado === 'A' && ladoActual !== 'A') {
    caseteBox.classList.remove('girado');
    ladoActual = 'A';
  }
  // 3. Si presionan el mismo lado en el que ya están -> No rota (se queda estático)

  // Reproducir el audio correspondiente
  const datosLado = historias[zonaActual][`lado${lado}`];
  if (datosLado && datosLado.audio) {
    player.src = datosLado.audio;
    player.play().catch(() => console.log("Esperando interacción del usuario."));
  }
}