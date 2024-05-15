// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "If I had a chance,", time: 14 },
  { text: " I'd take it faster than a heart beat", time: 19 },
  { text: "If I caught a glance,", time: 23 },
  { text: "I'd run to you like nobody was watching", time: 27 },
  { text: "But it's so hard to get to you", time: 32 },
  { text: "cause when you see the sun", time: 35 },
  { text: "I see the moon", time: 36 },
  { text: "Buckets of water,", time: 38 },
  { text: "millions of clouds", time: 40 },
  { text: "miles of road", time: 42},
  { text: "just to get where you are", time: 45 },
  { text: "Oh I wish", time: 47 },
  { text: "It wasn't so far", time: 53 },
  { text: "Thousands of dollars just to be near", time: 57 },
  { text: "Countless thoughts ", time: 60 },
  { text: "of you being here", time: 62 },
  { text: "Oh I wish ", time: 64 },
  { text: "it wasn't so hard", time: 70 },
  { text: "But maybe one day we can ", time: 73 },
  { text: "break the distance", time: 76 },

  //parte 2 
  { text: "I know it's hard", time: 96 },
  { text: "for everyone to understand it", time: 101 },
  { text: "But you're in my heart", time: 104 },
  { text: "even though it feels ", time: 106 },
  { text: "like we got stranded", time: 109},

  { text: "And I wish I could get to you", time: 113 },
  { text: "see face to face", time: 115 },
  { text: "without a screen cutting through", time:118 },

  { text: "Buckets of water,", time: 120},
  { text: "millions of clouds", time: 122 },
  { text: "miles of road ", time: 124 },
  { text: "just to get where you are", time: 127 },

  { text: "Oh I wish", time: 130 },
  { text: "It wasn't so far", time: 135 },
  { text: "Thousands of dollars just to be near", time: 138

   },
  { text: "Countless thoughts", time: 140 },
  { text: "of you being here", time: 142 },
  { text: "Oh I wish", time: 144 },
  { text: "it wasn't so hard", time: 150 },
  { text: "But maybe one day we can", time: 155 },
  { text: "break the distance", time: 157 },


  { text: "Clouds will you please help me out,", time: 178 },
  { text: "I need to go and see them now", time: 182 },
  { text: "Pick me up off my feet, ", time: 184 },
  { text: "I know that it's crazy", time: 186 },
  { text: "but I am ready with my suitcase by me", time: 191 },

  { text: "Clouds will you please help me out,", time: 194 },
  { text: "I need to go and see them now", time: 198 },
  { text: "Pick me up off my feet, ", time: 200 },
  { text: "I know that it's crazy", time: 203 },
  { text: "but I am ready with my suitcase by me", time: 209 },

  { text: "Buckets of water,", time: 211},
  { text: "millions of clouds", time: 213 },
  { text: "miles of road ", time: 215 },
  { text: "just to get where you are", time: 218 },

  { text: "Oh I wish", time: 220 },
  { text: "it wasn't so hard", time: 224 },
  { text: "But maybe one day we can", time: 228 },
  { text: "break the distance", time: 230 },


 
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);