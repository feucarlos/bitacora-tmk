import { FechaHoraUniversal } from './fecha-hora.model';

export class VacacionesItem extends FechaHoraUniversal{
    id: number;
    desc: string;
    dias: number;
    fechaFin: string;
    periodo: string;
    ymdFin: number;

    constructor() {
        super();
        this.id = new Date().getTime();
        this.desc = '';
        this.dias = 1;
        this.periodo = Number(this.getYear() - 1 ) + ' - ' + this.getYear();
        this.fechaFin = this.fecha;
    }
}
