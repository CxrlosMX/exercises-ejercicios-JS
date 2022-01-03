const d = document;
export function digitalClock(clock, playBtn, stopBtn) {
    let clockTime;
    d.addEventListener("click", (e) => {
        if (e.target.matches(playBtn)) {
            clockTime = setInterval(() => {

                // Creamos una variable para almacenar la hora-El método toLocaleDateString() devuelve una cadena con una representación de la fecha sensible al lenguaje.
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h2>${clockHour}</h2>`;
            }, 1000);
            // Desabilitamos nuestro boton
            e.target.disabled = true;
        }
        // -----------------
        if (e.target.matches(stopBtn)) {
            clearInterval(clockTime);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(playBtn).disabled = false;
        }
    });
}
export function alarm(playBtn, stopBtn) {

}