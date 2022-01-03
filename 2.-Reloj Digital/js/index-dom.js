import { digitalClock, alarm } from "./reloj-digital.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("/assets/008522530_prev.mp3", "#activar-alarma", "#desactivar-alarma");
});