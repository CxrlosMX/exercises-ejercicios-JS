const d = document,
    w = window;

export default function darkMode(btn, classDark) {
    const $themeBtn = d.querySelector(btn),
        $selectors = d.querySelectorAll("[data-dark]");
        console.log($selectors);
    // $selectors nos retorna un nodo con todos los elementos que tienen el data atribute, como lo aplicamos al HTML todos los elementos dentro del HTML tendran esa Data
    let moon = "🌙",
        sun = "☀️";
    
    d.addEventListener("click", (e) => {
        if (e.target.matches(btn)) {
            console.log($themeBtn.textContent);
            //Verificaremos si el boton del tema lo que tiene adentro es una luna
            if ($themeBtn.textContent === moon) {
                // Agregamos la clase
                $selectors.forEach((el) => el.classList.add(classDark));

                // Y cambiamo el simbolo que esta dentro de nuestro boton
                $themeBtn.textContent = sun;
            }
            else {
                $selectors.forEach((el) => el.classList.remove(classDark));
                $themeBtn.textContent = moon;
            }
        }
    });

}


