import { BitacoraItem } from './bitacora-item.model';
export class CalidadItem extends BitacoraItem{
    calificacion: number;

    constructor() {
        super();
        this.calificacion = 10;
    }

}
