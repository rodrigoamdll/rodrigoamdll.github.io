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

//Validaciones agregar pelicula
    document.getElementById('formAgregar').addEventListener('submit', function (event) {
            var titulo = document.getElementById('titulo').value.trim();
            var descripcion = document.getElementById('descripcion').value.trim();
            var horarios = document.getElementById('horarios').value.trim();
            var precio = document.getElementById('precio').value.trim();
            var imagen = document.getElementById('imagen').value.trim();

            if (titulo === '' || descripcion === '' || horarios === '' || precio === '' || imagen === '') {
                alert('Todos los campos son obligatorios. Por favor, completa el formulario.');
                event.preventDefault();
            }
        });

        //Editar pelicula
        document.getElementById('formEditar').addEventListener('submit', function (event) {
            var nuevo_titulo = document.getElementById('nuevo_titulo').value.trim();
            var nueva_descripcion = document.getElementById('nueva_descripcion').value.trim();
            var nuevos_horarios = document.getElementById('nuevos_horarios').value.trim();
            var nuevo_precio = document.getElementById('nuevo_precio').value.trim();
            var nueva_imagen = document.getElementById('nueva_imagen').value.trim();

            if (nuevo_titulo === '' || nueva_descripcion === '' || nuevos_horarios === '' || nuevo_precio === '' || nueva_imagen === '') {
                alert('Todos los campos son obligatorios. Por favor, completa el formulario.');
                event.preventDefault();
            }
        });

        //Eliminar pelicula
        document.getElementById('formEliminar').addEventListener('submit', function (event) {
            var seleccionar_pelicula = document.getElementById('seleccionar_pelicula').value;

            if (seleccionar_pelicula === '') {
                alert('Por favor, selecciona una película.');
                event.preventDefault();
            }
        });

        //Agregar usuario
        document.getElementById('formUsuario').addEventListener('submit', function (event) {
            var nombre = document.getElementById('nombre').value.trim();
            var email = document.getElementById('email').value.trim();
            var password = document.getElementById('password').value.trim();

            if (nombre === '' || email === '' || password === '') {
                alert('Todos los campos son obligatorios. Por favor, completa el formulario.');
                event.preventDefault();
            }
        });

        // Manejar clic en el botón "Editar Usuario"
    document.getElementById('editarUsuario').addEventListener('click', function () {
        // Lógica para editar el usuario (puedes implementar tu lógica aquí)
        alert('Editar usuario');
    });

    // Manejar clic en el botón "Eliminar Usuario"
    document.getElementById('eliminarUsuario').addEventListener('click', function () {
        // Lógica para eliminar el usuario (puedes implementar tu lógica aquí)
        alert('Eliminar usuario');
    });
});

