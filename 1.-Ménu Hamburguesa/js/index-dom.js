import hamburgerMenu from "./menu-hamburguesa.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
    // Pasamos como parametros el boton, el panel que se ocultara y por ultimo el link que cierra una vez que seleccionamos la sección
    hamburgerMenu(".panel-btn", ".panel",".menu a");
});

