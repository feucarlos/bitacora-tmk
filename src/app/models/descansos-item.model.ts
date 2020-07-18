export class DescansosItem{
    id: number;
    desc: string;
    fecha: Date;
    ymd: number;
    cincoXdos: boolean;

    constructor(fecha: Date, calificacion: number, cincoXdos: boolean = false, desc?: string ) {
        this.id = new Date().getTime();
        if ( desc ) { this.desc = desc; };
        if ( cincoXdos ) { this.cincoXdos = cincoXdos; };
        this.fecha = fecha;
        this.ymd = this.fecha.getFullYear() * 10000 + this.fecha.getMonth() * 100 + this.fecha.getDate();
    }
}