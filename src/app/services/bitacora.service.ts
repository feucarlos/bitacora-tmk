import { Injectable } from '@angular/core';
import { FaltaItem } from '../models/falta-item.model';
import { ToastController } from '@ionic/angular';
import { CalidadItem } from '../models/calidad-item.model';

@Injectable({
  providedIn: 'root'
})
export class BitacoraService {

  faltas: FaltaItem[] = [];
  calidadLista: CalidadItem[] = [];
  constructor(public toastController: ToastController) {
    this.loadStorage();
  }

  loadStorage(){
    if( localStorage.getItem('faltas') ){
      this.faltas = JSON.parse(localStorage.getItem('faltas'))
    } else { this.faltas = []; }
    if( localStorage.getItem('calidad') ){
      this.calidadLista = JSON.parse(localStorage.getItem('calidad'))
    } else { this.calidadLista = []; }
}

  saveStorage(key: string){
    // TODO: cambiar a switch
    if (key === 'faltas') { localStorage.setItem('faltas', JSON.stringify(this.faltas)); };
    if (key === 'calidad') { localStorage.setItem('calidad', JSON.stringify(this.calidadLista)); };
  }

  agregarFalta( nFecha: string, desc?: string) {
    let duplicado = false;
    const fhl = new Date( nFecha );
    fhl.setTime( fhl.getTime() + fhl.getTimezoneOffset() * 60 * 1000 );
    const falta = new FaltaItem(fhl, desc);

    // Buscar si no existe una falta con la misma fecha
    for (const f of this.faltas) {
      if (  f.ymd === falta.ymd  ){ duplicado = true; }
    }

    if ( !duplicado ) {
      this.faltas.push(falta);
      this.faltas.sort((a, b) => a.ymd - b.ymd );
      this.saveStorage( 'faltas' );
    } else {
      this.presentToast('Ya existe un registro con esa fecha');
    }
  }

  borrarFalta(falta: FaltaItem){
    this.faltas =  this.faltas.filter( listaData => listaData.id !== falta.id);
    this.saveStorage( 'faltas' );
  }

  agregarCalidad(fecha: Date, calificacion: number, desc: string){
    const tmp =  new CalidadItem(fecha, calificacion, desc);
    this.calidadLista.push(tmp);
    console.log(this.calidadLista);
  }
  borrarCalidad(calidad: CalidadItem){
    this.calidadLista =  this.calidadLista.filter( listaData => listaData.id !== calidad.id);
    this.saveStorage( 'calidad' );
  }


  async presentToast( msg: string ) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
