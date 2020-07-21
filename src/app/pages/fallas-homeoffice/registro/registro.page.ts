import { Component, OnInit } from '@angular/core';
import { BitacoraService } from '../../../services/bitacora.service';

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

  constructor(public bitacora: BitacoraService) {
    const hoy = new Date();
    const  mes = hoy.getMonth() + 1;
    if ( mes < 10 ) {
      this.fecha = hoy.getFullYear() + '-0' + mes + '-' + hoy.getDate();
    }
    else {
      this.fecha = hoy.getFullYear() + '-' + mes + '-' + hoy.getDate();
    }
    this.ubicacion = 'Tec';
    this.hInicio = hoy.getHours() + ':' + hoy.getMinutes();
    this.hFinal = hoy.getHours() + ':' + hoy.getMinutes();
  }

  ngOnInit() {
  }

  agregarFalla(){
    console.log(this.fecha, this.ubicacion);
    console.log(this.hInicio);
    console.log(this.hFinal);
    console.log(this.desc);
    
    
  }

}
