import { Injectable } from '@angular/core';
import { FaltaItem } from '../models/falta-item.model';
import { ToastController } from '@ionic/angular';
import { CalidadItem } from '../models/calidad-item.model';
import { CapaItem } from '../models/capa-item.model';
import { DescansoItem } from '../models/descanso-item.model';
import { FallaHomeOfficeItem } from '../models/falla-home-office-item.model';
import { FirmaDesfirmaItem } from '../models/firma-desfirma-item.model';
import { IncapacidadItem } from '../models/incapacidad-item.model';
import { VacacionesItem } from '../models/vacaciones-item.model';

@Injectable({
  providedIn: 'root'
})
export class BitacoraService {

  faltas: FaltaItem[] = [];
  calidadLista: CalidadItem[] = [];
  capacitacion: CapaItem[] = [];
  descansos: DescansoItem[] = [];
  fallasHomeOffice: FallaHomeOfficeItem[] = [];
  firmaDesfirmas: FirmaDesfirmaItem[] = [];
  incapacidades: IncapacidadItem[] = [];
  vacaciones: VacacionesItem[] = [];



  constructor(public toastController: ToastController) {
    this.loadStorage();
  }

  loadStorage(){
    if ( localStorage.getItem('faltas') ){
      this.faltas = JSON.parse(localStorage.getItem('faltas'));
    } else { this.faltas = []; }

    if ( localStorage.getItem('calidad') ){
      this.calidadLista = JSON.parse(localStorage.getItem('calidad'));
    } else { this.calidadLista = []; }

    if ( localStorage.getItem('capacitacion') ){
      this.capacitacion = JSON.parse(localStorage.getItem('capacitacion'));
    } else { this.capacitacion = []; }

    if ( localStorage.getItem('descansos') ){
      this.descansos = JSON.parse(localStorage.getItem('descansos'));
    } else { this.descansos = []; }

    if ( localStorage.getItem('fallasHomeOffice') ){
      this.fallasHomeOffice = JSON.parse(localStorage.getItem('fallasHomeOffice'));
    } else { this.fallasHomeOffice = []; }

    if ( localStorage.getItem('firmaDesfirmas') ){
      this.firmaDesfirmas = JSON.parse(localStorage.getItem('firmaDesfirmas'));
    } else { this.firmaDesfirmas = []; }

    if ( localStorage.getItem('incapacidades') ){
      this.incapacidades = JSON.parse(localStorage.getItem('incapacidades'));
    } else { this.incapacidades = []; }

    if ( localStorage.getItem('vacaciones') ){
      this.vacaciones = JSON.parse(localStorage.getItem('vacaciones'));
    } else { this.vacaciones = []; }
}

  saveStorage(key: string){
    // TODO: cambiar a switch cuando esten todas las opciones
    if (key === 'faltas') { localStorage.setItem('faltas', JSON.stringify(this.faltas)); }
    if (key === 'calidad') { localStorage.setItem('calidad', JSON.stringify(this.calidadLista)); }
    if (key === 'capacitacion') { localStorage.setItem('capacitacion', JSON.stringify(this.capacitacion)); }
    if (key === 'descansos') { localStorage.setItem('descansos', JSON.stringify(this.descansos)); }
    if (key === 'fallasHomeOffice') { localStorage.setItem('fallasHomeOffice', JSON.stringify(this.fallasHomeOffice)); }
    if (key === 'firmaDesfirmas') { localStorage.setItem('firmaDesfirmas', JSON.stringify(this.firmaDesfirmas)); }
    if (key === 'incapacidades') { localStorage.setItem('incapacidades', JSON.stringify(this.incapacidades)); }
    if (key === 'vacaciones') { localStorage.setItem('vacaciones', JSON.stringify(this.vacaciones)); }
  }

  // TODO Homologar funciones que reciban como argumento el modelo
  agregarFalta( nFecha: string, desc?: string) {
    // TODO mover bloque de código al modulo de faltas
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
    this.calidadLista.sort( (a, b) => a.ymd - b.ymd );
    this.saveStorage('calidad');
  }
  borrarCalidad(calidad: CalidadItem){
    this.calidadLista =  this.calidadLista.filter( listaData => listaData.id !== calidad.id);
    this.saveStorage( 'calidad' );
  }
  agregarCapa( capa: CapaItem ){
    this.capacitacion.push( capa );
    this.capacitacion.sort( (a, b) => a.ymd - b.ymd );
    this.saveStorage( 'capacitacion' );
  }
  borrarCapa(capa: CapaItem){
    this.capacitacion = this.capacitacion.filter (listaData => listaData.id !== capa.id);
    this.saveStorage('capacitacion');
  }
  agregarDescanso( descanso: DescansoItem ){
    this.descansos.push( descanso );
    this.descansos.sort( (a, b) => a.ymd - b.ymd );
    this.saveStorage( 'descansos' );
  }
  borrarDescanso(descanso: DescansoItem){
    this.descansos = this.descansos.filter (listaData => listaData.id !== descanso.id);
    this.saveStorage('descansos');
  }
  agregarfallaHomeOffice( fallaHomeOffice: FallaHomeOfficeItem ){
    this.fallasHomeOffice.push( fallaHomeOffice );
    this.fallasHomeOffice.sort( (a, b) => a.ymd - b.ymd );
    this.saveStorage( 'fallasHomeOffice' );
  }
  borrarFallaHomeOffice(fallaHomeOffice: FallaHomeOfficeItem){
    this.fallasHomeOffice = this.fallasHomeOffice.filter (listaData => listaData.id !== fallaHomeOffice.id);
    this.saveStorage('fallasHomeOffice');
  }
  agregarFirmaDesfirmas( firmaDesfirma: FirmaDesfirmaItem ){
    this.firmaDesfirmas.push( firmaDesfirma );
    this.firmaDesfirmas.sort( (a, b) => a.ymd - b.ymd );
    this.saveStorage( 'firmaDesfirmas' );
  }
  borrarFirmaDesfirma(firmaDesfirma: FirmaDesfirmaItem){
    this.firmaDesfirmas = this.firmaDesfirmas.filter (listaData => listaData.id !== firmaDesfirma.id);
    this.saveStorage('firmaDesfirmas');
  }
  agregarIncapacidad( incapacidad: IncapacidadItem ){
    this.incapacidades.push( incapacidad );
    this.incapacidades.sort( (a, b) => a.ymd - b.ymd );
    this.saveStorage( 'incapacidades' );
  }
  borrarIncapacidad(inca: IncapacidadItem){
    this.incapacidades = this.incapacidades.filter (listaData => listaData.id !== inca.id);
    this.saveStorage('incapacidades');
  }
  agregarVaca( vaca: VacacionesItem ){
    this.vacaciones.push( vaca );
    this.vacaciones.sort( (a, b) => a.ymd - b.ymd );
    this.saveStorage( 'vacaciones' );
  }
  borrarVaca(vaca: VacacionesItem){
    this.vacaciones = this.vacaciones.filter (listaData => listaData.id !== vaca.id);
    this.saveStorage('vacaciones');
  }


  async presentToast( msg: string ) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  buscaSemanaOcupada(inicio: number, final: number){
    for (const item of this.descansos){
      if ( item.time >= inicio && item.time <= final ) {
        this.presentToast('Ya hay un descanso asignado para esta semana');
        return true;
      }
    }
    return false;
  }

}
