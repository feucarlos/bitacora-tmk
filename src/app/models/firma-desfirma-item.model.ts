export class FirmaDesfirmaItem{
    id: number;
    fecha: string;
    hora: string;
    desc: string;
    ymd: number;

    constructor(fecha: string) {
        const hoy = new Date();
        this.id = new Date().getTime();
        this.desc = '';
        this.hora = '15:00';
        this.fecha = '1974-11-27';
        this.ymd = hoy.getFullYear() * 10000 + hoy.getMonth() * 100 + hoy.getDate();
    }

}
