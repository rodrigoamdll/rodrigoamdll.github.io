document.addEventListener("DOMContentLoaded", function () {
    // Obtenemos los elementos relevantes
    const formAgregar = document.getElementById("formAgregar");
    const formEditar = document.getElementById("formEditar");
    const formEliminar = document.getElementById("formEliminar");
    const formUsuario = document.getElementById("formUsuario");
    
    



    // Inicialmente ocultamos el formulario de editar
    formEditar.style.display = "none";
    formEliminar.style.display = "none";
    formUsuario.style.display = "none";



    // Agregamos un evento de clic al enlace de "Editar Película"
    document.getElementById("editLink").addEventListener("click", function () {
        // Mostramos el formulario de editar y ocultamos los demás
        formEditar.style.display = "block";
        formAgregar.style.display = "none";
        formEliminar.style.display = "none";
        formUsuario.style.display = "none";
    });

    // Agregamos un evento de clic al enlace de "Agregar Película"
    document.getElementById("addLink").addEventListener("click", function () {
        // Mostramos el formulario de agregar y ocultamos los demás
        formAgregar.style.display = "block";
        formEditar.style.display = "none";
        formEliminar.style.display = "none";
        formUsuario.style.display = "none";
    });

    // Agregamos un evento de clic al enlace de "Eliminar Película"
    document.getElementById("deleteLink").addEventListener("click", function () {
        // Mostramos el formulario de eliminar y ocultamos los demás
        formAgregar.style.display = "none";
        formEditar.style.display = "none";
        formEliminar.style.display = "block";
        formUsuario.style.display = "none";
    });

    // Agregamos un evento de clic al enlace de "Usuario"
    document.getElementById("userLink").addEventListener("click", function () {
    // Mostramos el formulario de eliminar y ocultamos los demás
    formAgregar.style.display = "none";
    formEditar.style.display = "none";
    formEliminar.style.display = "none";
    formUsuario.style.display = "block";
});

document.getElementById('cerrarSesionLink').addEventListener('click', function (event) {
    // Prevenir el comportamiento predeterminado del enlace
    event.preventDefault();

    // Mostrar la alerta
    var confirmLogout = confirm("¿Estás seguro de que quieres cerrar sesión?");
    
    // Si el usuario hace clic en "Aceptar", redirige a la página de cierre de sesión
    if (confirmLogout) {
        window.location.href = "..//pages/index.html";
    }
    // Si el usuario hace clic en "Cancelar", no hace nada
    // Puedes agregar más lógica aquí si es necesario
});
});