import { Bombo } from '../../common/bombo.js';

export class BomboOffline extends Bombo {
    constructor() {
        super();
        let boles=this.boles()
        let shuffle = () => boles.sort((a, b) => Math.random() - 0.5);
        let bolesExtracted = [];
        this.getExtractedNumbers = () => bolesExtracted;

        this.pickNumber = () => {
            shuffle();
            boles[0] && bolesExtracted.push(boles[0]);
            this.ballrender(boles[0])
            return (boles.length > 0 && boles.splice(0, 1)) ? bolesExtracted[bolesExtracted.length - 1] : false;
        }
    }
}