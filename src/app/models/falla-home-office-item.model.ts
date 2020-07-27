import { MinLengthValidator } from '@angular/forms';
import { doesNotReject } from 'assert';

export class FallaHomeOfficeItem{
    id: number;
    desc: string;
    fecha: string;
    ymd: number;
    lugar: string;
    hInicio: string;
    hFinal: string;
    tiempo: number;
    incidencia?: number;

    constructor() {
        const nfecha = new Date();
        this.fecha = this.datetoUdate( nfecha );
        this.id = nfecha.getTime();
        this.desc = '';
        this.ymd = nfecha.getFullYear() * 10000 + nfecha.getMonth() * 100 + nfecha.getDate();
        this.lugar = 'Tec';
        this.hInicio = nfecha.toLocaleTimeString().substr(0, 5);
        this.hFinal = this.hInicio;
        this.tiempo = 0;
        // this.incidencia = -1;
    }

    private datetoUdate( fecha: Date ){
        const  mes = fecha.getMonth() + 1;
        const dia = fecha.getDate();
        let uDate = '';
        uDate = ( mes < 10 ) ? (fecha.getFullYear() + '-0' + mes) : (fecha.getFullYear() + '-' + mes);
        uDate = ( dia < 10 ) ? ( uDate + '-0' + dia ) : ( uDate + '-' + dia );
        return uDate;
      }


}
