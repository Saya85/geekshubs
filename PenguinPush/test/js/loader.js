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

//menu amburguesa

function menu() {
    document.getElementsByClassName("inferior")[0].style.transform = 'scale(1)'
}
