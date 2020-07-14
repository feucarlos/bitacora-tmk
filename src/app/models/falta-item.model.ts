export class FaltaItem {
    id: number;
    desc?: string;
    fecha: Date;
    ymd: number;

    constructor(fecha: Date, desc?: string){
        this.fecha = fecha;
        if (desc) { this.desc = desc; }
        this.id = new Date().getTime();
        this.ymd = this.fecha.getFullYear() * 10000 + this.fecha.getMonth() * 100 + this.fecha.getDate();
    }

}