const d = document;
let x = 0, y = 0;
export function moveBall(e, ball, stage) {
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        limitsBall = $ball.getBoundingClientRect(),
        limitsStage = $stage.getBoundingClientRect();
    console.log(e.keyCode);
    console.log(e.key);


    // Con ayuda de un swith-case detectaremos cual tecla pulso
    switch (e.keyCode) {
        case 37: {
            
            if (limitsBall.left > limitsStage.left) {
                e.preventDefault();
                x--;
            }
            // Izquierda
            // move("left");

            break;
        }
        case 38: {
           
            // Arriba
            // move("up");
            if (limitsBall.top > limitsStage.top) {
                e.preventDefault();
                y--;
            }
            break;
        }
        case 39: {
           
            if (limitsBall.right < limitsStage.right) {
                e.preventDefault();
                x++;
            }
            // move("right");
            break;
        }
        case 40: {
          
            if (limitsBall.bottom < limitsStage.bottom) {
                e.preventDefault();
                y++;
            }
            // move("down");
            break;
        }

        default: {

            break;
        }

    }
    $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}
