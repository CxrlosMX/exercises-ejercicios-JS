const d = document,
    w = window,
    n = navigator,
    ua = n.userAgent;
export default function serchFilters(input, selector) {
    d.addEventListener("keyup",(e)=>{
        if(e.target.matches(input)){
            // console.log(e.key);
            // Si precionamos la tecla esc, se limpia nuestro input
            if (e.key==="Escape") {
                e.target.value="";
            }

            d.querySelectorAll(selector).forEach((el)=>{
               (( el.textContent.toLowerCase().includes(e.target.value))?el.classList.remove("filter"):el.classList.add("filter"))
            });
        }
    });
}

