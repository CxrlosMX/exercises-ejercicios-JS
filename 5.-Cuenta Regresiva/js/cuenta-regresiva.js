const d = document;

export default function countDown(id, limiteDate, finalMessege) {
    const $countdown = d.getElementById(id),
        countDownDate = new Date(limiteDate).getTime();

    let countDownTime = setInterval(() => {
        let now = new Date().getTime(), limiteTime = countDownDate - now,
            days = Math.floor(limiteTime / (1000 * 60 * 60 * 24)),
            hours = ("0" + Math.floor(limiteTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).slice(-2),
            minutes = ("0" + Math.floor(limiteTime % (1000 * 60 * 60) / (1000 * 60))).slice(-2),
            seconds = ("0" + Math.floor(limiteTime % (1000 * 60) / (1000))).slice(-2);

        $countdown.innerHTML = `<h3>Faltan: ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos</h3>`
    }, 1000);
    if(limiteTime<0){
        clearInterval(countDownTime);
        $countdown.innerHTML = `<h3>${finalMessege}</h3>`
    }
} 