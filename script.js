
// =====================================
// INFORMACIÓN DE LOS DESTINOS
// =====================================

const destinos = {

    machu: {
        titulo: "🏔️ Machu Picchu - Cusco",
        descripcion: "Machu Picchu es una de las maravillas del mundo moderno. Esta impresionante ciudadela inca se encuentra en la región de Cusco, rodeada de montañas y una belleza natural extraordinaria. Es uno de los principales atractivos turísticos del Perú y un símbolo de nuestra historia."
    },

    titicaca: {
        titulo: "🌊 Lago Titicaca - Puno",
        descripcion: "El Lago Titicaca es un maravilloso destino ubicado entre Perú y Bolivia. Destaca por sus hermosos paisajes, sus aguas navegables y sus tradicionales islas flotantes de los Uros, donde se conserva una cultura ancestral."
    },

    amazonia: {
        titulo: "🌳 Amazonía peruana",
        descripcion: "La Amazonía peruana es una de las regiones con mayor biodiversidad del planeta. Cuenta con una enorme variedad de plantas, animales y paisajes naturales. Es un destino ideal para descubrir la riqueza de nuestra naturaleza."
    }

};


// =====================================
// MOSTRAR INFORMACIÓN DE DESTINOS
// =====================================

function mostrarDestino(destino) {

    const informacion = destinos[destino];

    if (!informacion) {
        return;
    }

    document.getElementById("modalTitulo").textContent =
        informacion.titulo;

    document.getElementById("modalDescripcion").textContent =
        informacion.descripcion;

    const modalElemento = document.getElementById("modalDestino");

    const modal = bootstrap.Modal.getOrCreateInstance(modalElemento);

    modal.show();
}


// =====================================
// EVENTOS DE LOS BOTONES
// =====================================

document.querySelectorAll("[data-destino]").forEach(boton => {

    boton.addEventListener("click", function () {

        const destino = this.getAttribute("data-destino");

        mostrarDestino(destino);

    });

});


// =====================================
// MENSAJE DE BIENVENIDA
// =====================================

function saludar() {

    const toastElemento = document.getElementById("mensajeToast");

    const toast = bootstrap.Toast.getOrCreateInstance(toastElemento, {
        delay: 4000
    });

    toast.show();

}


// =====================================
// CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN
// EN DISPOSITIVOS MÓVILES
// =====================================

document.querySelectorAll(".navbar-nav .nav-link").forEach(enlace => {

    enlace.addEventListener("click", function () {

        const menu = document.getElementById("menu");

        if (menu.classList.contains("show")) {

            bootstrap.Collapse.getOrCreateInstance(menu).hide();

        }

    });

});


// =====================================
// MENSAJE EN CONSOLA
// =====================================

console.log("🇵🇪 Descubre Perú cargado correctamente.");

console.log("¡Bienvenido a nuestra página turística!");
