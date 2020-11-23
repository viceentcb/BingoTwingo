export class Bombo {
    constructor(rootElement) {
        const templateBombo = Array.from({ length: 90 }, (_, i) => i + 1);
        let boles = [...templateBombo];
        let lastBall;
        this.render = () => {
            rootElement.innerHTML = `${boles.map(ball => `<div class='bingoBallEmpty' id='${ball}'>${ball}</div>`).join("")}`;
        }
        this.boles=()=>{return boles}

        this.ballrender = (ball) => {
            if (ball) {
                //si existe una ultima bola le quitamos la animacion
                if (lastBall) {
                    document.getElementById(lastBall).className = 'bingoBall';
                }
                //a la bola actual le ponemos la animacion
                document.getElementById(ball).className = 'bingoBall blink'

                lastBall = ball;
            }
        }
    }
}