import { digitalClock, alarm } from "./reloj-digital.js";

const d=document;

d.addEventListener("DOMContentLoaded",(e)=>{
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("#activar-alarma","#desactivar-alarma");
});