import { FechaHoraUniversal } from './fecha-hora.model';

export class VacacionesItem extends FechaHoraUniversal{
    id: number;
    desc: string;
    dias: number;
    periodo: string;

    constructor() {
        super();
        this.id = new Date().getTime();
        this.desc = '';
        this.dias = 1;
        this.periodo = String(this.year());
    }
}
