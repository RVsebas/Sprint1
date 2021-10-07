"use stric";

// espacio para el metodo principal

document.addEventListener("DOMContentLoaded", function() { // funcion que escucha cuando se carga la pagina
document.getElementById("form-registro").addEventListener("submit", validateForm); //funcion que escucha cuando se activa el evento submit en el form
});

function validateForm() { //funcion que llama a las funciones que van a validar los campos

    e.preventDefault(); // funcion que suspende el evento submit para que no se ejecute y asi validar los campos

    document.getElementById('nomSpan').innerHTML = ""; // limpia el span de la alerta
    document.getElementById('passSpan').innerHTML = ""; // limpia el span de la alerta
    document.getElementById('respSpan').innerHTML = ""; // limpia el span de la alerta


    // en este espacio se pondran las variables que van a recibir el true o false de las funciones que evaluan los campos del formulario

    var username = checkUsername(document.getElementById("username").value); // variable que guarda el valor true o false de la validacion de los campos
    var contrasena = checkContrasena(document.getElementById("contrasena").value); // variable que guarda el valor true o false de la validacion de los campos
    var respuesta_de_seguridad = checkCorreo(document.getElementById("respuesta_de_seguridad").value); // variable que guarda el valor de true o false de validacion de correo

    if (username && contrasena && respuesta_de_seguridad) { // condicional que evalua si las variables son true y asi activar el evento submit del form
        this.submit();
    }
}
// fin de espacio para medoto principal



// espacio para validacion de campo Nombre
function checkUsername() {
    const nomReg = /^([a-zA-Z ]){4,30}$/;
    console.log("Test Nombre: " + nomReg.test(username));
    // console.log(nom.length);

    if (!nomReg.test(username)) {
        document.getElementById('nomSpan').innerHTML = "Por favor verifique el nombre, minimo 4, maximo 30 y sin números.";
        document.getElementById('nombre').focus();
        console.log("[ERR Registro - Nombre]", "Por favor verifique el nombre, minimo 4, maximo 30 y sin números.");
        return false;
    } else {
        return true;
    }
}
// fin espacio para validacion de campo Nombre



// espacio para validacion de campo Contraseña
function checkContrasena() { //funcion de validacion de contrasena

    const regPass = /^(?=(?:.\d){1})(?=(?:.[A-Z]){1})(?=(?:.*[a-z]){1})\S{8,}$/; // expresion regular con el patron valido de contrasena
    console.log("Test Pass: " + regPass.test(contrasena)); //Imprime en consolo si el test es true o false

    if (!regPass.test(contrasena)) { //valida si el teste es true o false,
        document.getElementById("passSpan").innerHTML = "La contraseña debe tener minimo 8 digitos, una mayúscula, una minúscula y un número."; //Imprime en el html en la etiqueta span con id passSpan el texto
        document.getElementById("contrasena").focus(); // Hace el focus en el campo contrasena
        console.log("[ERR Registro - Password]", "La contraseña debe tener minimo 8 digitos, una mayuscula, una minuscula y un numero"); //Imprime el error en consola
        return false; //retorna false cuando no pasa el test de la expresion regular

    } else {
        return true; //retorna true si pasa el test de la expresion regular
    }
}
// fin espacio para validacion de campo Contraseña


// espacio para validacion de campo Correo
function checkRespuestaSeg() {
    const nomReg = /^([a-zA-Z ]){4,30}$/;
    console.log("Test Nombre: " + nomReg.test(respuesta));
    // console.log(nom.length);

    if (!nomReg.test(respuesta)) {
        document.getElementById('respSpan').innerHTML = "Por favor verifique su respuesta, minimo 4, maximo 30 y sin números.";
        document.getElementById('respuesta').focus();
        console.log("[ERR Registro - Nombre]", "Por favor verifique su respuesta, minimo 4, maximo 30 y sin números.");
        return false;
    } else {
        return true;
    }
}

