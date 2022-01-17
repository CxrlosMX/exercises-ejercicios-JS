const d = document,
    w = window,
    n = navigator,
    ua = n.userAgent;

export default function speechReader() {
    const $speechSelect = d.getElementById("speech-select"),
        $speechText = d.getElementById("speech-text"),
        $speechBtn = d.getElementById("speech-btn"),
        speechMessage = new SpeechSynthesisUtterance();

    // console.log(speechMessage);
    // Creamos un arreglo en el cual se alojaran las voces del sistema operativo       
    let voices = [];

    d.addEventListener("DOMContentLoaded", (e) => {
        // console.log(w.speechSynthesis);
        // console.log(w.speechSynthesis);

        w.speechSynthesis.addEventListener("voiceschanged", (e) => {
            voices = w.speechSynthesis.getVoices();
            console.log(voices);

            voices.forEach((voice) => {
                // Creamos dinamicamente un option
                const $option = d.createElement("option");
                // Le agregamos un valor
                $option.value = voice.name;

                // Le agreamos un texto
                $option.textContent = `${voice.name} *** ${voice.lang}`

                // Agreamos los elementos a nuestro elemento select del HTML
                $speechSelect.appendChild($option);
            })
        });
    });
    // Tenemos el método change por dado caso en que el usuario cambie de narrador
    d.addEventListener("change", (e) => {
        if (e.target === $speechSelect) {
            speechMessage.voice = voices.find((voice) => voice.name === e.target.value);
        }
    });
    // Evento que se ejecutara al dar click en el botón
    d.addEventListener("click", (e) => {
        if (e.target===$speechBtn) {
            // El que contenga la textarea se la asignamos al speech
            speechMessage.text=$speechText.value;
            // Ejecutamos nuestro speech
            w.speechSynthesis.speak(speechMessage);
        }
    });

}