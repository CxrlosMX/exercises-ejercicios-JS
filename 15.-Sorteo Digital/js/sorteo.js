const d = document,
    w = window,
    n = navigator,
    ua = n.userAgent;
export default function draw(btn, selector) {
    const getWinner = (selector) => {
        //  Obtenemos todos los elementos que tengamos con el selector
        const $players = d.querySelectorAll(selector),
            random = Math.floor(Math.random() * $players.length),
            winner = $players[random];
        // console.log($players, random, winner);
        return `El ganador es: ${winner.textContent}`;

    }
    d.addEventListener("click", (e) => {
        // Si el evento viene originado por el boton que le pasamos como parametro
        if (e.target.matches(btn)) {
            let result = getWinner(selector);
            alert(result);
            console.log(result);
        }
    });
}

const getWinnerComment = (selector) => {
    //  Obtenemos todos los elementos que tengamos con el selector
    const $players = d.querySelectorAll(selector),
        random = Math.floor(Math.random() * $players.length),
        winner = $players[random];
        
    return `El ganador es: ${winner.textContent}`;

}
