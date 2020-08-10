export class BitacoraItem{
    id: number;
    fecha: string;
    ymd: number;
    desc?: string;

    constructor(){
        this.fecha = new Date().toISOString();
        this.id = new Date().getTime();
        const fecha = new Date();
        this.ymd = fecha.getFullYear() * 10000 + fecha.getMonth() * 100 + 100 + fecha.getDate();
    }

}
