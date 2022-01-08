// ----------- COFLA 4, PROBLEMAS ------------------------ //

/*
PROBLEMA 1:
    . Interfaz para introducir notas
    . Validar que no haya errores
    . Promedia las notas con otras notas de 2 trabajos anteriores
    . Si el promedio es mayor a 7/10 aprueba
*/

// SOLUCION:


const promedioBoton = document.querySelector(".promedioBoton");

promedioBoton.addEventListener("click", enviarNotas);

function enviarNotas () {

    notaAnteriorUno = 4;
    notaAnteriorDos = 1.5;

    anteriorFinal = notaAnteriorUno + notaAnteriorDos;

    const notaUno = document.querySelector(".notaUno").value;
    
    const obtenidaUno = document.querySelector(".obtenidaUno");

    obtenidaUno.innerHTML = notaUno;

    const promedioFinal = document.querySelector(".promedioFinal");

    resultadoAhora = Math.round(notaAnteriorUno + notaAnteriorDos + notaUno  / 3);
    const mensaje = document.querySelector(".mensaje");
    switch (resultadoAhora){
        case 1 :
            mensaje.innerHTML = "No pasaste la Materia";
            mensaje.classList.add("perdiste")
            break;
        case 2:
            mensaje.innerHTML = "No pasaste la Materia";
            mensaje.classList.add("perdiste")
            break;
        case 3:
            mensaje.innerHTML = "No pasaste la Materia";
            mensaje.classList.add("perdiste")
            break;
        case 4:
            mensaje.innerHTML = "No pasaste la Materia";
            mensaje.classList.add("perdiste")
            break;
        case 5:
            mensaje.innerHTML = "No pasaste la Materia";
            mensaje.classList.add("perdiste")
            break;
        case 6:
            mensaje.innerHTML = "No pasaste la Materia";
            mensaje.classList.add("perdiste")
            break;
        case 7:
            mensaje.innerHTML = "Pasaste la Materia Raspado";
            mensaje.classList.add("ganaste")
            break;
        case 8:
            mensaje.innerHTML = "Pasaste pero pudiste estar mejor";
            mensaje.classList.add("ganaste")
            break;
        case 9:
            mensaje.innerHTML = "Excelente!!";
            mensaje.classList.add("ganaste")
            break;
        case 10:
            mensaje.innerHTML = "Perfecto!!";
            mensaje.classList.add("ganaste")
            break;
        default:
            mensaje.innerHTML = "que paso?"
    }

    const info = document.querySelector(".tarjeta-wrapper")
    promedioFinal.innerHTML = resultadoAhora;
    info.removeChild(promedioBoton);

}
