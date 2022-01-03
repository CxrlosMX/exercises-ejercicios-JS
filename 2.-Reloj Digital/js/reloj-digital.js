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
export function alarm(sound, playBtn, stopBtn) {
    d.querySelector(stopBtn).disabled = true;
    let alarmTime;
    // Creamos una etiqueta audio
    const $alarm = d.createElement("audio");
    // Ingresamos dinamicamente al su atributo src
    $alarm.src = sound;
    d.addEventListener("click", (e) => {
        if (e.target.matches(playBtn)) {
            // El timeout() solo se reproduce una sola vez
            alarmTime = setTimeout(() => {
                // Ejecutamos el audio
                $alarm.play();
            }, 1000);
            e.target.disabled = true;
            d.querySelector(stopBtn).disabled = false;
        }
        if (e.target.matches(stopBtn)) {
            clearTimeout(alarmTime);
            // Puasamos el sonido 
            $alarm.pause();
            //Reiniciamos el audio
            $alarm.currentTime = 0;
            d.querySelector(stopBtn).disabled = true;
            d.querySelector(playBtn).disabled = false;
        }
    });
}