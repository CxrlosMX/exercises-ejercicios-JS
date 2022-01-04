import { shortCuts } from "./eventos-teclado.js";

const d = document;

// Eventos de teclado:
/*
--->keydown: se produce al presionar una tecla y mantenerla presionada.
Su comportamiento es el mismo en todos los navegadores.
Propiedad keyCode: devuelve el código interno de la tecla.
Propiedad charCode: no está definida.

--->keyup: se produce al soltar una tecla presionada .
Su comportamiento es el mismo en todos los navegadores.
Propiedad keyCode: devuelve el código interno de la tecla.
Propiedad charCode: no está definida.


--->keypress: se produce en el instante de presionar la tecla.
Propiedad keyCode: devuelve el código interno de las teclas especiales, para las teclas normales no está definido.
Propiedad charCode: devuelve 0 para las teclas especiales o el código del carácter de la tecla pulsada para las teclas normales.
(En Internet Explorer keyCode devuelve el carácter de la tecla pulsada, y charCode no está definido).
*/

d.addEventListener("keydown", (e) => {
    shortCuts(e);
});

// d.addEventListener("keyup", (e) => {
//     shortCuts(e);
// });



// d.addEventListener("keypress", (e) => {
//     shortCuts(e);
// });