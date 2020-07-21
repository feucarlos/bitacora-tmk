export class FallaHomeOfficeItem{
    id: number;
    desc: string;
    fecha: Date;
    ymd: number;
    lugar: string;
    hInicio?: number;
    hFinal?: number;
    incidencia?: number;

    constructor(fecha: Date, desc?: string, lugar?: string,
                hInicio?: number, hFinal?: number, incidencia?: number ) {
        this.id = new Date().getTime();
        this.fecha = fecha;
        this.desc = desc;
        this.ymd = this.fecha.getFullYear() * 10000 + this.fecha.getMonth() * 100 + this.fecha.getDate();
        this.lugar = lugar;
        this.hInicio = hInicio;
        this.hFinal = hFinal;
        this.incidencia = incidencia;
    }
}
