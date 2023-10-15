
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

const iniciarC1 = function () {
    const comprarC1 = document.getElementById("idBtnComprarC1");
    if (comprarC1.addEventListener) {
        comprarC1.addEventListener(
            "click", 
            function () {
                location.href = "../pages/compras.html";
            },
            false
        );
    }   else if (comprarC1.attachEvent) {
        comprarC1.attachEvent("onclick", function () {
            location.href = "../pages/compras.html";
    });
    }
}
///inicializando datos
iniciar();
iniciarC1();
