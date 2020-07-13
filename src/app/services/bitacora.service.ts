import { Injectable } from '@angular/core';
import { FaltaItem } from '../models/falta-item.model';

@Injectable({
  providedIn: 'root'
})
export class BitacoraService {

  faltas: FaltaItem[] = [];

  constructor() { }

  agregarFalta(fecha: string, desc?: string) {
    const fhl = new Date( fecha );
    fhl.setTime( fhl.getTime() + fhl.getTimezoneOffset() * 60 * 1000 );
    const falta = new FaltaItem(fhl, desc);
    this.faltas.push(falta);
    console.log(this.faltas);
  }
}
