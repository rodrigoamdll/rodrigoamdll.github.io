
const iniciar = function () {
    const comprar = document.getElementById("idBtnComprar");
    if (comprar.addEventListener) {
        comprar.addEventListener(
            "click", 
            function () {
                location.href = "../pages/tarjeta.html";
            },
            false
        );
    }   else if (comprar.attachEvent) {
        comprar.attachEvent("onclick", function () {
            location.href = "../pages/tarjeta.html";
    });
    }
}
///inicializando datos
iniciar();
