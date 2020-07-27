export class CalidadItem{
    id: number;
    desc: string;
    fecha: Date;
    ymd: number;
    calificacion: number;
    withDesc: boolean;

    constructor(fecha: Date, calificacion: number, desc?: string) {
        this.id = new Date().getTime();
        if ( desc ) {
            this.desc = desc;
            this.withDesc = true;
        }
        else {
            this.withDesc = false;
        }
        this.calificacion = calificacion;
        this.fecha = fecha;
        this.ymd = this.fecha.getFullYear() * 10000 + this.fecha.getMonth() * 100 + this.fecha.getDate();
    }
}
