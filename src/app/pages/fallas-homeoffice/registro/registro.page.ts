import { Component, OnInit } from '@angular/core';
import { BitacoraService } from '../../../services/bitacora.service';
import { FallaHomeOfficeItem } from '../../../models/falla-home-office-item.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  fecha: string;
  hInicio: string;
  hFinal: string;
  falla: string;
  desc: string;
  ubicacion: string;

  constructor(public bitacora: BitacoraService, private location: Location) {
    const hoy = new Date();
    const  mes = hoy.getMonth() + 1;
    if ( mes < 10 ) {
      this.fecha = hoy.getFullYear() + '-0' + mes + '-' + hoy.getDate();
    }
    else {
      this.fecha = hoy.getFullYear() + '-' + mes + '-' + hoy.getDate();
    }
    this.ubicacion = 'Tec';
    this.hInicio = hoy.getHours() + ':' + ( hoy.getMinutes() < 10 ? '0' + hoy.getMinutes() : hoy.getMinutes() );
    this.hFinal = hoy.getHours() + ':' + ( hoy.getMinutes() < 10 ? '0' + hoy.getMinutes() : hoy.getMinutes() );
  }

  ngOnInit() {
  }

  agregarFalla(){
    const fecha = new Date( this.fecha );
    fecha.setTime( fecha.getTime() + fecha.getTimezoneOffset() * 60 * 1000 );
    const inicio = Number(this.hInicio.substr(0, 2) ) * 60 + Number( this.hInicio.substr(3, 2) );
    const final = Number(this.hFinal.substr(0, 2) ) * 60 + Number( this.hFinal.substr(3, 2) );

    if ( final < inicio ) {
      this.bitacora.presentToast('Error en hora final');
      return;
    }
    const fho = new FallaHomeOfficeItem( fecha, this.ubicacion, inicio, final, this.desc );
    this.bitacora.agregarfallaHomeOffice( fho );
    this.bitacora.presentToast('Registro guardado');
    this.location.back();
    }

}
