
export class FirmaDesfirmaItem{
    id: number;
    desc: string;
    fecha: Date;
    ymd: number;
    hora?: number;

    constructor(fecha: Date, desc?: string, hora?: number) {
        this.id = new Date().getTime();
        if ( desc ) { this.desc = desc; }
        if ( hora ) { this.hora = hora; };
        this.fecha = fecha;
        this.ymd = this.fecha.getFullYear() * 10000 + this.fecha.getMonth() * 100 + this.fecha.getDate();
    }
}