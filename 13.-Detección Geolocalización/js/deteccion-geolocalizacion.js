const d = document,
    w = window,
    n = navigator,
    ua = n.userAgent;
export default function getGeolocation(id) {
    const $id = d.getElementById(id),
        options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

    const success = (position) => {
        let coords = position.coords;
        console.log(position);
        $id.innerHTML = `<p>Tu posición actual es:</p>
        <ul>
        <li>Latitud:<b>${coords.latitude}</b> </li>
        <li>Longitud:<b>${coords.longitude}</b></li>
        <li>Precisión:<b>${coords.accuracy} metros</b></li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">Ver en google maps</a>`
    };

    const error = (err) => {
        console.log(`Error ${err.code}: ${err.message}`);
        $id.innerHTML = `<p><strong>Error ${err.code}: ${err.message}</strong></p>`
    };

    // Funcion de la geolocalización-El método Geolocation.getCurrentPosition() se utiliza para obtener la posición de un dispositivo.
    n.geolocation.getCurrentPosition(success, error, options);
}

