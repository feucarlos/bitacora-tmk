import { Injectable } from '@angular/core';
import { FaltaItem } from '../models/falta-item.model';

@Injectable({
  providedIn: 'root'
})
export class BitacoraService {

  faltas: FaltaItem[] = [];

  constructor() {
    this.loadStorage();
  }

  loadStorage(){
    if( localStorage.getItem('faltas') ){
      this.faltas = JSON.parse(localStorage.getItem('faltas'))
    } else {
      this.faltas = [];
    }
    console.log(this.faltas);
  }

  saveStorage(){
    localStorage.setItem('faltas', JSON.stringify(this.faltas));
  }

  agregarFalta(fecha: string, desc?: string) {
    const fhl = new Date( fecha );
    fhl.setTime( fhl.getTime() + fhl.getTimezoneOffset() * 60 * 1000 );
    const falta = new FaltaItem(fhl, desc);
    this.faltas.push(falta);
    this.saveStorage();
  }

  borrarFalta(falta: FaltaItem){
    this.faltas =  this.faltas.filter( listaData => listaData.id !== falta.id);
    this.saveStorage();
  }
}