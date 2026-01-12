const preguntas = [
  {
    pregunta: "¿Qué objeto destruye definitivamente a un Horrocrux?",
    opciones: [
      "La varita de Saúco",
      "El fuego común",
      "El veneno de basilisco",
      "Un hechizo Patronus"
    ],
    correcta: 2
  },
  {
    pregunta: "¿Cuál es el segundo nombre de Albus Dumbledore?",
    opciones: [
      "Percival",
      "Severus",
      "Brian",
      "Wulfric"
    ],
    correcta: 0
  },
  {
    pregunta: "¿Quién fue el verdadero dueño del giratiempo que usó Hermione?",
    opciones: [
      "Dumbledore",
      "McGonagall",
      "El Ministerio de Magia",
      "Hermione"
    ],
    correcta: 2
  },
  {
    pregunta: "¿Qué hechizo usa Harry para repeler a los dementores?",
    opciones: [
      "Expelliarmus",
      "Expecto Patronum",
      "Lumos",
      "Protego"
    ],
    correcta: 1
  }
];

// Obtener día del año
function obtenerDiaDelAño() {
  const ahora = new Date();
  const inicio = new Date(ahora.getFullYear(), 0, 0);
  const diferencia = ahora - inicio;
  const unDia = 1000 * 60 * 60 * 24;
  return Math.floor(diferencia / unDia);
}

const dia = obtenerDiaDelAño();
const preguntaHoy = preguntas[dia % preguntas.length];

const preguntaEl = document.getElementById("pregunta");
const opcionesEl = document.getElementById("opciones");
const resultadoEl = document.getElementById("resultado");
const mensajeDiaEl = document.getElementById("mensaje-dia");

const yaRespondio = localStorage.getItem("respondio-dia") == dia;

preguntaEl.textContent = preguntaHoy.pregunta;

if (yaRespondio) {
  resultadoEl.textContent = "Ya respondiste la trivia de hoy 🪄";
  mensajeDiaEl.textContent = "Volvé mañana para una nueva pregunta.";
} else {
  preguntaHoy.opciones.forEach((opcion, index) => {
    const btn = document.createElement("button");
    btn.textContent = opcion;
    btn.onclick = () => responder(index);
    opcionesEl.appendChild(btn);
  });
}

function responder(indice) {
  opcionesEl.innerHTML = "";

  if (indice === preguntaHoy.correcta) {
    resultadoEl.textContent = "¡Correcto! Diez puntos para tu casa 🏆";
    resultadoEl.className = "correcto";
  } else {
    resultadoEl.textContent = "Incorrecto… esa respuesta pertenece a Slytherin 😅";
    resultadoEl.className = "incorrecto";
  }

  mensajeDiaEl.textContent = "Podés intentar de nuevo mañana ✨";
  localStorage.setItem("respondio-dia", dia);
}

