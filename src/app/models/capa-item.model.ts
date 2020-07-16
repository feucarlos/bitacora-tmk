import { Time } from '@angular/common';


export class CapaItem{
    id: number;
    desc: string;
    fecha: Date;
    ymd: number;
    hInicio: number;
    hFinal: number;

    constructor(fecha: Date, hInicio: string, hFinal: string, desc?: string) {
        this.id = new Date().getTime();
        if ( desc ) { this.desc = desc; };
        this.hInicio = this.strToNumber( hInicio );
        this.hFinal = this.strToNumber( hFinal );
        this.fecha = fecha;
        this.ymd = this.fecha.getFullYear() * 10000 + this.fecha.getMonth() * 100 + this.fecha.getDate();
    }

    strToNumber( time: string ){
        const horas = Number( time.substr(0, 2) );
        const minutos = Number ( time.substr(3, 2))
        return horas * 60 + minutos;
    }
}