const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text"),
      logoText = document.getElementById("imageText");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
        // Cambiar la imagen al modo oscuro
        logoText.innerHTML = '<span class="image"><img src="../img/icons/film.png" alt=""></span>';
    } else {
        modeText.innerText = "Dark mode";
        // Volver a la imagen original al modo claro
        logoText.innerHTML = '<span class="image"><img src="../img/icons/film2.png" alt=""></span>';
    }
});

function mostrarContenido(seccion) {
    // Oculta todas las secciones de contenido
    document.querySelectorAll('section').forEach(function(seccion) {
        seccion.style.display = 'none';
    });

    // Muestra la sección seleccionada
    document.getElementById(seccion).style.display = 'block';
}