const d = document;
export function shortCuts(e) {
    console.log(e);
    console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(`crtl: ${e.ctrlKey}`);
    console.log(`alt: ${e.altKey}`);
    console.log(`shift: ${e.shiftKey}`);

    //Imprimiremos mensajes en especifico cuando el usuario precione en particular una letra
    if (e.key === "a" && e.altKey) {
        alert(`Alerta con el teclado`);
    }
    if (e.key === "c" && e.ctrlKey) {
        confirm(`Confirm con el teclado`);
    }
    if (e.key === "p" && e.ctrlKey) {
        prompt(`Prompt con el teclado`);
    }
}
export function name(params) {

}