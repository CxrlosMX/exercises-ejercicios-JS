const d = document,
    w = window,
    ls = localStorage;

export default function darkMode(btn, classDark) {
    const $themeBtn = d.querySelector(btn),
        $selectors = d.querySelectorAll("[data-dark]");
    console.log($selectors);
    // $selectors nos retorna un nodo con todos los elementos que tienen el data atribute, como lo aplicamos al HTML todos los elementos dentro del HTML tendran esa Data
    let moon = "🌙",
        sun = "☀️";

    const lightMode = () => {
        $selectors.forEach((el) => el.classList.remove(classDark));
        $themeBtn.textContent = moon;
        ls.setItem("theme","light");
    };
    const darkMode = () => {
        // Agregamos la clase
        $selectors.forEach((el) => el.classList.add(classDark));

        // Y cambiamo el simbolo que esta dentro de nuestro boton
        $themeBtn.textContent = sun;
        ls.setItem("theme","dark");
    };

    d.addEventListener("click", (e) => {
        if (e.target.matches(btn)) {
            console.log($themeBtn.textContent);
            //Verificaremos si el boton del tema lo que tiene adentro es una luna
            if ($themeBtn.textContent === moon) {
                darkMode();
            }
            else {
                lightMode();
            }
        }
    });
    // Nota: No podemos tener una funcion del mismo tipo que la funcion padre
    // LocalStorage
    d.addEventListener("DOMContentLoaded", (e) => {
        // Este método nos sirvira para verificar si tenemos algo en nuestro local storage
        // alert("Hola");
        // console.log(ls.getItem("theme"));
        if (ls.getItem("theme") === null) {//Si no existe ninguna variable con ese nombre en el localStorage

            // Si no existe ninguna variable entonces creamos una variable
            ls.setItem("theme", "light")

        }
        if (ls.getItem("theme")==="light") {
            lightMode();
        }
        if (ls.getItem("theme")==="dark") {
            darkMode();
        }



    });

}


