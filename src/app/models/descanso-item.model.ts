export class DescansoItem{
    id: number;
    desc: string;
    fecha: Date;
    time: number;
    ymd: number;
    cincoXdos: boolean;

    constructor(fecha: Date, cincoXdos: boolean = false, desc?: string ) {
        this.id = new Date().getTime();
        if ( desc ) { this.desc = desc; };
        if ( cincoXdos ) { this.cincoXdos = cincoXdos; };
        this.fecha = fecha;
        this.time = fecha.getTime();
        this.ymd = this.fecha.getFullYear() * 10000 + this.fecha.getMonth() * 100 + this.fecha.getDate();
    }
}
