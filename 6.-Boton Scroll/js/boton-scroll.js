const d = document,
w=window;


export default function scrollTop_Btn(btn) {
     const $scrollBtn=d.querySelector(btn);
      
    //  Le agregamo un evento a la ventana
    w.addEventListener("scroll",(e)=>{
        // Metodos que nos retorna la distancia que se ha movido la barra scroll hacia abajo----console.log(w.pageYOffset,d.documentElement.scrollTop);
        let scrollTop=d.documentElement.scrollTop;
        // Si nos hemos desplazado a mas de 600px, entonces mostraremos el botón
        if(scrollTop>300){
            // Si se cumple nuestro boton aparecera
            $scrollBtn.classList.remove("hidden");
            // Para que aparesca nuestro boton, eliminamos la clase que lo oculta
        }
        else {
            $scrollBtn.classList.add("hidden");
        }
    });
    d.addEventListener("click",(e)=>{
        // Al dar click nuestro scroll vuelve al inicio
        if(e.target.matches(btn)){
            // Este método nos permite darle un punto inicial a nuestro scroll o hacia donde queremos que se reinicie
            w.scrollTo({
                behavior: "smooth",
                top:0
            }); 
        }
    });
}