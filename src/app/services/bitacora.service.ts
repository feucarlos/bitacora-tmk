import { Injectable } from '@angular/core';
import { FaltaItem } from '../models/falta-item.model';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class BitacoraService {

  faltas: FaltaItem[] = [];
  
  constructor(public toastController: ToastController) {
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
    // Buscar si no existe una falta con la misma fecha
    const falta = new FaltaItem(fhl, desc);
    if(this.faltas.filter( fd => fd.fecha === falta.fecha )){
      this.presentToast('Ya existe un registro con esa fecha');
    } else
    {
      this.faltas.push(falta);
      this.saveStorage();
    }
  }

  borrarFalta(falta: FaltaItem){
    this.faltas =  this.faltas.filter( listaData => listaData.id !== falta.id);
    this.saveStorage();
  }

  async presentToast( msg: string ) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
