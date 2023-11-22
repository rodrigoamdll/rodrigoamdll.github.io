// En main.js

document.getElementById('comprarBoletosBtn').addEventListener('click', function() {
    // Obtén la información del card
    var titulo = document.querySelector('.card-title').innerText;
    var director = document.querySelector('.card-text:nth-child(2)').innerText;
    var sinopsis = document.querySelector('.card-text:nth-child(3)').innerText;
    var elenco = document.querySelector('.card-text:nth-child(4)').innerText;
    var precio = document.querySelector('.card-text:nth-child(5)').innerText;
    var miniaturaImagen = document.querySelector('.card-img-top').src; // Obtén la fuente de la imagen

    // Codifica la información para enviarla como parámetros en la URL
    var parametros = '?titulo=' + encodeURIComponent(titulo) + '&director=' + encodeURIComponent(director) + '&sinopsis=' + encodeURIComponent(sinopsis) + '&elenco=' + encodeURIComponent(elenco) + '&precio=' + encodeURIComponent(precio) + '&miniaturaImagen=' + encodeURIComponent(miniaturaImagen);

    // Redirige a la página de compras con los parámetros
    window.location.href = './pages/compras.html' + parametros;
});
