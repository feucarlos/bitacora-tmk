import { FechaHoraUniversal } from './fecha-hora.model';

export class IncapacidadItem extends FechaHoraUniversal{
    id: number;
    desc: string;
    dias: number;

    constructor() {
        super();
        this.id = new Date().getTime();
        this.desc = '';
        this.dias = 1;
    }

}
