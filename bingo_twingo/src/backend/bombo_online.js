import { Bombo } from '../common/bombo.js';
export class BomboOnline extends Bombo {
    constructor() {
        super();
        this.renderball = (ball) => {
            this.ballrender(ball)
        }
    }
}