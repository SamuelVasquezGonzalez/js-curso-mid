// ------------------- SEGUNDO PROBLEMA DE COFLA ---------------------- //

// PROBLEMA 1:
/*
    1. El formulario debe contener el nombre completo, email y materia que se debe
    2. validar que es mail sea valido, y que los nombres sean reales
    3. enviar los datos al servidor
*/


const registrar = document.getElementById("registrar");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const materia = document.getElementById("materia");
const resultado = document.querySelector(".resultado");
registrar.addEventListener("click", (e)=>{
    e.preventDefault();
    let error = validarDatos();
    if(error[0]){
        resultado.innerHTML = error[1];
        resultado.classList.add("error");
        resultado.classList.remove("correcto");
    }else{
        resultado.innerHTML = "Se han enviado los datos y usted ha sido inscrito";
        resultado.classList.add("correcto");
        resultado.classList.remove("error");
    }
});


const validarDatos =  ()=> {
    let error = [];
    if(nombre.value.length < 5 || nombre.value.length > 16){
        error[0] = true;
        error[1] = "El nombre no puede tener menos de 5 caracteres y mas de 16 caracteres";
        return error;
    }else if (nombre.value == null){
        error[0] = true;
        error[1] = "Complete el campo 'Nombre'";
        return error;
    }else if(correo.value.length < 5 || correo.value.length > 50  || correo.value.indexOf("@") == -1 || correo.value.indexOf(".") == -1){
        error[0] = true;
        error[1] = "El Correo es invalido, verifique sus datos";
        return error;
    }else if(correo.value == null){
        error[0] = true;
        error[1] = "Complete el campo 'Correo'";
        return error;
    }else if(materia.value.length < 5 || materia.value.length > 16){
        error[0] = true;
        error[1] = "La asignatura no puede tener menos de 5 caracteres y mas de 16 caracteres";
        return error;
    }
    error[0] = false;
    return error;
}