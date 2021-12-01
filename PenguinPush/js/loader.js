//loader
//variables
var loader = document.getElementsByTagName("div")[0];
var main = document.getElementsByTagName("main")[0];

//funcion
function loaderFuera() {
    loader.classList.add("loaderOut");
    main.classList.add("mainIn");
    setTimeout(noLoader, 1000);

    function noLoader() {
        loader.style.display = "none";
    }
}

//accion
window.onload = setTimeout(loaderFuera, 500);

//menu hamburguesa

function menu() {
    document.getElementsByClassName("superior")[0].style.transform = 'scale(1)';
}

//pinguinos raza

function uno(){
    document.getElementsByClassName("abs1")[0].style.opacity = '1';
    document.getElementById("uno1")[0].style.opacity = '0';
   
}
function dos(){
    document.getElementsByClassName("abs2")[0].style.opacity = '1';
    document.getElementById("dos2")[0].style.opacity = '0';
}
function tres(){
    document.getElementsByClassName("abs3")[0].style.opacity = '1';
    document.getElementById("tres3")[0].style.opacity = '0';
}