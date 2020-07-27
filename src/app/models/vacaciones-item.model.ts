export class VacacionesItem{
    id: number;
    desc: string;
    fecha: Date;
    fechaDias: number;
    ymd: number;

    constructor(fecha: Date, fechaDias: number, desc?: string ) {
        this.id = new Date().getTime();
        if ( desc ) { this.desc = desc; };
        this.fecha = fecha;
        this.fechaDias = fechaDias;
        this.ymd = this.fecha.getFullYear() * 10000 + this.fecha.getMonth() * 100 + this.fecha.getDate();
    }
}
