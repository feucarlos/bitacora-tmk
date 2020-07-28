import { FechaHoraUniversal } from './fecha-hora.model';

export class FirmaDesfirmaItem extends FechaHoraUniversal{
    id: number;
    desc: string;

    constructor() {
        super();
        this.id = new Date().getTime();
        this.desc = '';
    }

}
