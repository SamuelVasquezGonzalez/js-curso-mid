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

    const notaUno = document.querySelector(".notaUno").value;
    
    let notaDos = 2;
    let notaTres = 3;

    const obtenidaUno = document.querySelector(".obtenidaUno");
    const obtenidaDos = document.querySelector(".obtenidaDos");
    const obtenidaTres = document.querySelector(".obtenidaTres");

    obtenidaUno.innerHTML = notaUno;
    obtenidaDos.innerHTML = notaDos;
    obtenidaTres.innerHTML = notaTres;

    const promedioFinal = document.querySelector(".promedioFinal");

    resultadoFinal = Math.round(notaDos + notaTres + notaUno / 3);
    promedioFinal.innerHTML = resultadoFinal;
    const mensaje = document.querySelector(".mensaje");

    if(notaUno > 10 ){
        obtenidaUno.innerHTML = "";
        obtenidaDos.innerHTML = "";
        obtenidaTres.innerHTML = "";
        resultadoAhora = "";
        mensaje.innerHTML = "No puedes tener mas de 10 de nota";
        mensaje.classList.add("perdiste");
        promedioFinal.innerHTML = "";
        
    }else{
        switch (resultadoFinal){
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
    }
    

    const info = document.querySelector(".tarjeta-wrapper");
    info.removeChild(promedioBoton);

}
