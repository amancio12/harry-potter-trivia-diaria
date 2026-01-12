const preguntas = [
  { pregunta: "¿Quién lleva a Harry por primera vez al Callejón Diagon?", opciones: ["Hagrid", "Dumbledore", "McGonagall", "Arthur Weasley"], correcta: 0 },
  { pregunta: "¿Cómo se llama el banco de los magos?", opciones: ["Gringotts", "WizardBank", "Ollivanders", "Honeydukes"], correcta: 0 },
  { pregunta: "¿Qué animal representa a Gryffindor?", opciones: ["León", "Águila", "Serpiente", "Tejón"], correcta: 0 },
  { pregunta: "¿Quién es el guardián de las llaves de Hogwarts?", opciones: ["Filch", "Hagrid", "Snape", "Dumbledore"], correcta: 1 },
  { pregunta: "¿Qué posición juega Harry en Quidditch?", opciones: ["Golpeador", "Buscador", "Guardián", "Cazador"], correcta: 1 },
  { pregunta: "¿Cuál es la contraseña para entrar a la sala común de Gryffindor en el primer libro?", opciones: ["Caput Draconis", "Fortuna Major", "Pig Snout", "Salazar"], correcta: 0 },
  { pregunta: "¿Quién mata a Dumbledore?", opciones: ["Voldemort", "Bellatrix", "Snape", "Draco"], correcta: 2 },
  { pregunta: "¿De qué madera es la varita de Harry?", opciones: ["Roble", "Acebo", "Tejo", "Sauce"], correcta: 1 },
  { pregunta: "¿Qué núcleo tiene la varita de Harry?", opciones: ["Pluma de fénix", "Pelo de unicornio", "Corazón de dragón", "Colmillo de basilisco"], correcta: 0 },
  { pregunta: "¿Quién es el heredero de Slytherin?", opciones: ["Harry", "Draco", "Tom Riddle", "Snape"], correcta: 2 },

  { pregunta: "¿Qué criatura vive en la Cámara Secreta?", opciones: ["Dragón", "Basilisco", "Dementor", "Acromántula"], correcta: 1 },
  { pregunta: "¿Quién abre la Cámara Secreta?", opciones: ["Ginny", "Harry", "Tom Riddle", "Lucius"], correcta: 0 },
  { pregunta: "¿Cómo se llama el elfo doméstico de los Malfoy?", opciones: ["Kreacher", "Dobby", "Winky", "Hokey"], correcta: 1 },
  { pregunta: "¿Qué hechizo usa Harry contra Voldemort por primera vez?", opciones: ["Expelliarmus", "Lumos", "Protego", "Stupefy"], correcta: 0 },
  { pregunta: "¿Quién es el padrino de Harry?", opciones: ["Remus Lupin", "Sirius Black", "James Potter", "Arthur Weasley"], correcta: 1 },
  { pregunta: "¿Cómo se llama el mapa que muestra Hogwarts?", opciones: ["Mapa Mágico", "Mapa del Merodeador", "Mapa Encantado", "Plano de Hogwarts"], correcta: 1 },
  { pregunta: "¿Quiénes crearon el Mapa del Merodeador?", opciones: ["Fred y George", "James, Sirius, Remus y Peter", "Dumbledore y McGonagall", "Los fundadores"], correcta: 1 },
  { pregunta: "¿Qué forma toma el Patronus de Harry?", opciones: ["Ciervo", "Lobo", "Perro", "Águila"], correcta: 0 },
  { pregunta: "¿Quién traiciona a los Potter?", opciones: ["Sirius", "Snape", "Peter Pettigrew", "Remus"], correcta: 2 },
  { pregunta: "¿En qué casa estuvo Peter Pettigrew?", opciones: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"], correcta: 0 },

  { pregunta: "¿Qué torneo aparece en el Cáliz de Fuego?", opciones: ["Torneo de Magos", "Copa de las Casas", "Torneo de los Tres Magos", "Desafío Supremo"], correcta: 2 },
  { pregunta: "¿Qué escuela NO participa en el Torneo de los Tres Magos?", opciones: ["Beauxbatons", "Durmstrang", "Ilvermorny", "Hogwarts"], correcta: 2 },
  { pregunta: "¿Quién pone el nombre de Harry en el cáliz?", opciones: ["Voldemort", "Barty Crouch Jr.", "Snape", "Dumbledore"], correcta: 1 },
  { pregunta: "¿Qué dragón enfrenta Harry?", opciones: ["Colacuerno húngaro", "Galés verde", "Hocicorto sueco", "Bola de fuego china"], correcta: 0 },
  { pregunta: "¿Quién muere al final del Cáliz de Fuego?", opciones: ["Sirius", "Cedric Diggory", "Snape", "Krum"], correcta: 1 },
  { pregunta: "¿Qué hechizo mata Voldemort?", opciones: ["Avada Kedavra", "Crucio", "Imperio", "Sectumsempra"], correcta: 0 },
  { pregunta: "¿Qué criatura ataca a Harry en el lago?", opciones: ["Sirenas", "Grindylows", "Inferi", "Kelpie"], correcta: 1 },
  { pregunta: "¿Quién baila con Harry en el Baile de Navidad?", opciones: ["Cho Chang", "Ginny Weasley", "Hermione", "Luna Lovegood"], correcta: 0 },
  { pregunta: "¿Qué profesor es Mortífago encubierto?", opciones: ["Snape", "Moody", "Quirrell", "Lockhart"], correcta: 1 },
  { pregunta: "¿Qué ojo pierde Moody?", opciones: ["Derecho", "Izquierdo", "Ambos", "Ninguno"], correcta: 1 },

  { pregunta: "¿Qué organización lidera Dumbledore?", opciones: ["Orden del Fénix", "Ministerio", "Aurors", "Liga Mágica"], correcta: 0 },
  { pregunta: "¿Quién tortura a los padres de Neville?", opciones: ["Bellatrix", "Voldemort", "Lucius", "Snape"], correcta: 0 },
  { pregunta: "¿Qué departamento del Ministerio aparece en la Orden del Fénix?", opciones: ["Misterios", "Criaturas", "Educación", "Registros"], correcta: 0 },
  { pregunta: "¿Quién mata a Sirius Black?", opciones: ["Bellatrix", "Voldemort", "Lucius", "Snape"], correcta: 0 },
  { pregunta: "¿Qué es un Horrocrux?", opciones: ["Objeto con alma fragmentada", "Criatura oscura", "Hechizo prohibido", "Reliquia"], correcta: 0 },
  { pregunta: "¿Cuántos Horrocruxes crea Voldemort?", opciones: ["5", "6", "7", "8"], correcta: 2 },
  { pregunta: "¿Qué Horrocrux es destruido primero?", opciones: ["Diario", "Anillo", "Copa", "Nagini"], correcta: 0 },
  { pregunta: "¿Qué profesor enseña Pociones con Harry?", opciones: ["Snape", "Slughorn", "McGonagall", "Flitwick"], correcta: 0 },
  { pregunta: "¿Quién fue el Príncipe Mestizo?", opciones: ["Harry", "Snape", "Voldemort", "James"], correcta: 1 },
  { pregunta: "¿Qué hechizo crea Snape?", opciones: ["Sectumsempra", "Levicorpus", "Diffindo", "Incendio"], correcta: 0 },

  { pregunta: "¿Qué reliquia pertenece a Ravenclaw?", opciones: ["Diadema", "Espada", "Copa", "Anillo"], correcta: 0 },
  { pregunta: "¿Quién mata a Bellatrix?", opciones: ["Molly Weasley", "Ginny", "Hermione", "Luna"], correcta: 0 },
  { pregunta: "¿Qué animal es Nagini?", opciones: ["Serpiente", "Dragón", "Araña", "Lobo"], correcta: 0 },
  { pregunta: "¿Quién es el verdadero dueño de la Varita de Saúco al final?", opciones: ["Harry", "Voldemort", "Draco", "Snape"], correcta: 0 },
  { pregunta: "¿Dónde se esconde la diadema?", opciones: ["Sala de los Menesteres", "Biblioteca", "Torre", "Mazmorras"], correcta: 0 },
  { pregunta: "¿Qué hechizo usa Hermione para borrar recuerdos?", opciones: ["Obliviate", "Confundo", "Imperio", "Silencio"], correcta: 0 },
  { pregunta: "¿Quién muere en la Batalla de Hogwarts?", opciones: ["Fred", "George", "Percy", "Ron"], correcta: 0 },
  { pregunta: "¿Qué casa valora la lealtad?", opciones: ["Hufflepuff", "Ravenclaw", "Slytherin", "Gryffindor"], correcta: 0 },
  { pregunta: "¿Quién es la directora después de Dumbledore?", opciones: ["McGonagall", "Snape", "Umbridge", "Flitwick"], correcta: 0 },
  { pregunta: "¿Qué animal es el Patronus de Snape?", opciones: ["Cierva", "Ciervo", "Murciélago", "Serpiente"], correcta: 0 }
];

// -------- LÓGICA DIARIA --------

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


