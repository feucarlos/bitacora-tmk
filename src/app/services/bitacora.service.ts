import { Injectable } from '@angular/core';
import { FaltaItem } from '../models/falta-item.model';

@Injectable({
  providedIn: 'root'
})
export class BitacoraService {

  faltas: FaltaItem[] = [];

  constructor() { }

  agregarFalta(year: number, mounth: number, day: number, desc?: string){
    const falta = new FaltaItem(year, mounth, day, desc);
    this.faltas.push( falta );
    console.log(falta);
  }
}
