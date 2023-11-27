const chequeoRespuesta = (respuestaCorrecta, pregunta) => {
    let respuesta = prompt(pregunta).toLowerCase();
  
    while (respuesta !== "no" && respuesta !== "si") {
      alert("Respuesta invalida debe contestar por si o por no");
      respuesta = prompt(pregunta).toLowerCase();
    }
  
    if (respuesta === respuestaCorrecta) {
      alert("Respuesta correcta");
    } else {
      alert("Respuesta incorrecta");
    }
  };

  
for (let i = 0; i <= 10; i++) {
  let pregunta;
  let respuestaCorrecta;

  switch (i) {
    case 1:
      pregunta = "Argentina es campeón del mundo?";
      respuestaCorrecta = "si";
      chequeoRespuesta(respuestaCorrecta, pregunta);
      break;
    case 2:
      pregunta = "Messi es el capitan del Seleccionado?";
      respuestaCorrecta = "si";
      chequeoRespuesta(respuestaCorrecta, pregunta);
      break;
    case 3:
      pregunta = "Por si o por no.Escaloni es el DT de la Seleccion?";
      respuestaCorrecta = "si";
      chequeoRespuesta(respuestaCorrecta, pregunta);
      break;
      case 4:
      pregunta = "Por si o por no. Walter Samuel forma parte del cuerpo tecnico?";
      respuestaCorrecta = "si";
      chequeoRespuesta(respuestaCorrecta, pregunta);
      break;
      case 5:
      pregunta = "Por si o por no.Angel Di Maria es conocido por su apodo el fideo?";
      respuestaCorrecta = "si";
      chequeoRespuesta(respuestaCorrecta, pregunta);
      break;
      case 6:
      pregunta = "Por si o por no. Rodrigo De Paul está de novio con la famosa actriz/cantante Tini Tini Tini?";
      respuestaCorrecta = "no";
      chequeoRespuesta(respuestaCorrecta, pregunta);
      break;
      case 7:
      pregunta = "Por si o por no.Fue desvinculado del plantel el Papu Gomez?";
      respuestaCorrecta = "si";
      chequeoRespuesta(respuestaCorrecta, pregunta);
      break;
      case 8:
      pregunta = "Por si o por no. Julian Alvarez es conocido como la araña?";
      respuestaCorrecta = "si";
      chequeoRespuesta(respuestaCorrecta, pregunta);
      break;
      case 9:
      pregunta = "Por si o por no. Messi es el mejor jugador del futbol?";
      respuestaCorrecta = "si";
      chequeoRespuesta(respuestaCorrecta, pregunta);
      break;
      case 10:
      pregunta = "Por si o por no.Argentina tiene 4 mundiales ganados?";
      respuestaCorrecta = "no";
      chequeoRespuesta(respuestaCorrecta, pregunta);
      break;
    default:
      alert("Encuesta de preguntas por si o por no");
      break;
  }
}