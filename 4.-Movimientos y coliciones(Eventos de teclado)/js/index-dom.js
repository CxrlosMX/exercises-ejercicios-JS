import { moveBall } from "./movimientos.js";
const d = document;

d.addEventListener("keydown", (e) => {
    moveBall(e, ".ball", ".stage");
});