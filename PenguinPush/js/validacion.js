
//accion
window.onload = setTimeout(loaderFuera, 500);

//validacion
function validacion() {
    //variables
    var nombre = document.getElementsByName("nombre")[0].value;
    var mail = document.getElementsByName("email")[0].value;
    var edad = document.getElementsByName("edad")[0].value;
    var polPriv = document.getElementsByName("aceptacion")[0];
    var valor = document.getElementsByName("valor");
    var valorSeleccionado = false;
    var comentarios = document.getElementsByName("comentarios")[0].value;
    var icono = document.getElementsByTagName("i");
    // condicionales

    if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
        mensError[0].innerHTML = "falta el nombre";
        icono[0].style.display = 'block'; 
        return false;
    } else if (mail == null || mail.length == 0 || !(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(mail))) {
        mensError[1].innerHTML = "algo pasa con el email";
        icono[1].style.display = 'block'; 
        return false;
    } else if (edad == null || edad.length == 0 || isNaN(edad)) {
        mensError[2].innerHTML = "introduzca edad";
         icono[2].style.display = 'block'; 
        //display opaciti 
        return false;
    } else if (!polPriv.checked) {
        mensError[3].innerHTML = "falla aprovar politica";
         icono[3].style.display = 'block'; 
        return false;
    }
    for (var i = 0; i < valor.length; i++) {
        if (valor[i].checked) {
            valorSeleccionado = true;
            break;
        }
    }
    if (!valorSeleccionado) {
        mensError[4].innerHTML = "selecciona un valor";
         icono[4].style.display = 'block'; 
        return false;
    }
    if (comentarios == null || comentarios.length == 0 || /^\s+$/.test(comentarios)) {
        mensError[5].innerHTML = "escriba un comentario";
         icono[5].style.display = 'block'; 
        return false;
    }

    var elige = document.getElementsByName("genero")[0].selectedIndex;
    if (elige == null || elige == 0) {
        mensError[6].innerHTML = "selecciona una opcion";
         icono[6].style.display = 'block'; 
        return false;
    }
    return true;
}

var mensError = document.getElementsByClassName("mensError");
var icono = document.getElementsByTagName("i");
function limpiarError(x) {
    mensError[x].innerHTML = "";
    icono[x].style.display = 'none';
}
