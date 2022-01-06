const d = document,
    w = window,
    n = navigator,
    ua = n.userAgent;

export default function networkStatus() {
    // Dentro del objeto (navigator) podemos identificar cuando nuestro navegador pierda la conexion
    // navigator.online
    /*En JS tenemos ya dos eventos los cuales nos determina cuando estamos en linea o no*/

    // Crearemos una funcion para cambiar el fondo
    const isOnline = () => {
        // Crearemos dinamicamente un elemento HTML
        const $div = d.createElement("div");
        if (n.onLine) {
            // Le agregamos un texto
            $div.textContent = "Conexiòn Reestablecidad";
            // Agregamos la clase para que tenga las propiedades creadas en css
            $div.classList.add("online");
            // ---Eliminamos la clase offline
            $div.classList.remove("offline");
        }
        else {
            // Le agregamos un texto a nuestra div
            $div.textContent = "Conexiòn Perdida"
            $div.classList.add("offline");
            $div.classList.remove("online");
        }
        // Agregamos el elemento a nuestro archivo html--El método insertAdjacentElement() inserta un elemento nodo dado en una posición dada con respecto al elemento sobre el que se invoca
        d.body.insertAdjacentElement("afterbegin", $div);
        // Ejecutamos un timeout para que despues de un cierto tiempo desaparesca nuestro mensaje
        setTimeout(() => {
            d.body.removeChild($div);
        }, 2000); 

    };
    w.addEventListener("online", (e) => isOnline());
    w.addEventListener("offline", (e) => isOnline());
}