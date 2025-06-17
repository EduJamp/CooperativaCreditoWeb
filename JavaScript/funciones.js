/* Validacion de la pagina de Registro del Cliente */
    /* Funcion para validar Formulario */
    function validarFormulario() {
        let campos = ["numdoc", "name", "lastname", "fechnac", "email", "domicilio"];
        let validacionExitosa = true;

        // Limpiar bordes rojos
        campos.forEach(id => {
            document.getElementById(id).style.border = "";
        });

        // Validar campos vacíos
        campos.forEach(id => {
            let valor = document.getElementById(id).value.trim();
            if (valor === "") {
                validacionExitosa = false;
                document.getElementById(id).style.borderBottom = "2px solid red";
            }
        });

        const modal = document.getElementById("alertaModal");
        const mensaje = document.getElementById("mensajeModal");
        const botonesConfirmacion = document.getElementById("botonesConfirmacion");
        const botonesError = document.getElementById("botonesError");

        if (!validacionExitosa) {
            mensaje.innerText = "Por favor, completa todos los campos antes de guardar.";
            botonesConfirmacion.style.display = "none";
            botonesError.style.display = "block";
        } else {
            mensaje.innerText = "¿Deseas continuar con el envío del formulario?";
            botonesConfirmacion.style.display = "block";
            botonesError.style.display = "none";
        }

        modal.style.display = "flex"; // Mostrar modal
    }

    /* Funcion para cerrar cuadro de alerta */
    function cerrarAlerta() {
        document.getElementById("alertaModal").style.display = "none";
    }
    /* Funcion para dirigir la pagina pero muestra tambien el cuadro de alerta */
    function redirigir() {
        window.location.href = "/Html/RegistroCliente2.html"; // Cambia la URL
    }

    /* Funcion que permite cancelar el envio del formulario y borra todos los daots que se ingresaron */
    function cancelarFormulario() {
    // Oculta el modal
    document.getElementById("alertaModal").style.display = "none";

    // Lista de campos a limpiar
    const campos = ["numdoc", "name", "lastname", "fechnac", "email", "domicilio"];

    // Limpiar campos y bordes
    campos.forEach(id => {
        const campo = document.getElementById(id);
        campo.value = "";
        campo.style.borderBottom = ""; // Elimina la línea roja si la hay
    });
}

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

/* Funciones para La pagina de Registro de Clientes 2 */
    var state = false

    function togglep2() {
        if(state){
            document.getElementById("password").setAttribute("type" , "password");
            document.getElementById("eye").style.color='#000';
            state = false;
        }else{
            document.getElementById("password").setAttribute("type" , "text");
            document.getElementById("eye").style.color='#5887ef';
            state = true;
        }
    }

    function validarFormulariop2() {
        let campos = ["operador", "pais", "telefono", "user", "password"];
        let validacionExitosa = true;

        // Limpiar bordes rojos
        campos.forEach(id => {
            document.getElementById(id).style.border = "";
        });

        // Validar campos vacíos
        campos.forEach(id => {
            let valor = document.getElementById(id).value.trim();
            if (valor === "") {
                validacionExitosa = false;
                document.getElementById(id).style.borderBottom = "2px solid red";
            }
        });

        const modal = document.getElementById("alertaModal");
        const mensaje = document.getElementById("mensajeModal");
        const botonesConfirmacion = document.getElementById("botonesConfirmacion");
        const botonesError = document.getElementById("botonesError");

        if (!validacionExitosa) {
            mensaje.innerText = "Por favor, completa todos los campos para terminar con el registro";
            botonesConfirmacion.style.display = "none";
            botonesError.style.display = "block";
        } else {
            mensaje.innerText = "Usuario registrado";
            botonesConfirmacion.style.display = "block";
            botonesError.style.display = "none";
        }

        modal.style.display = "flex"; // Mostrar modal
    }

    function redirigirp2() {
        window.location.href = "../Html/loginCliente.html"; // Cambia la URL
    }

/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

    /* Funciones para la pagina del login del cliente */
    var state = false
    function toggle() {
        if(state){
            document.getElementById("passwords").setAttribute("type" , "password");
            document.getElementById("eye").style.color='#7a797e';
            state = false;
        }else{
            document.getElementById("passwords").setAttribute("type" , "text");
            document.getElementById("eye").style.color='#5887ef';
            state = true;
        }
    }

    /* Funcion para validar el login */
    function validarLogin() {
        let campos = ["numdocument", "users", "passwords"];
        let validacionExitosa = true;

        // Limpiar bordes rojos
        campos.forEach(id => {
            document.getElementById(id).style.border = "";
        });

        // Validar campos vacíos
        campos.forEach(id => {
            let valor = document.getElementById(id).value.trim();
            if (valor === "") {
                validacionExitosa = false;
                document.getElementById(id).style.borderBottom = "2px solid red";
            }
        });

        const modal = document.getElementById("alertaModal");
        const mensaje = document.getElementById("mensajeModal");
        const botonesConfirmacion = document.getElementById("botonesConfirmacion");
        const botonesError = document.getElementById("botonesError");

        if (!validacionExitosa) {
            mensaje.innerText = "Por favor, completa todos los campos";
            botonesConfirmacion.style.display = "none";
            botonesError.style.display = "block";
        } else {
            mensaje.innerText = "Usuario y Contraseña Válida";
            botonesConfirmacion.style.display = "block";
            botonesError.style.display = "none";
        }

        modal.style.display = "flex"; // Mostrar modal
    }


    /* Funcion para dirigir la pagina pero muestra tambien el cuadro de alerta */
    function redirigirLogin() {
        window.location.href = "/Html/RegistroCliente2.html"; // Cambia la URL
    }

    /* Funcion que permite cancelar el envio del formulario y borra todos los daots que se ingresaron */
    function cancelarLogin() {
    // Oculta el modal
    document.getElementById("alertaModal").style.display = "none";

    // Lista de campos a limpiar
    const datos = ["numdocument", "users", "passwords"];

    // Limpiar campos y bordes
    datos.forEach(id => {
        const dato = document.getElementById(id);
        dato.value = "";
        dato.style.borderBottom = ""; // Elimina la línea roja si la hay
    });
    }
                            