import { Component, OnInit } from '@angular/core';
import { BitacoraService } from '../../../services/bitacora.service';
import { ActivatedRoute } from '@angular/router';
import { CalidadItem } from '../../../models/calidad-item.model';
import { CapaItem } from '../../../models/capa-item.model';
import { DescansoItem } from '../../../models/descanso-item.model';
import { FaltaItem } from '../../../models/falta-item.model';
import { FallaHomeOfficeItem } from 'src/app/models/falla-home-office-item.model';
import { FirmaDesfirmaItem } from '../../../models/firma-desfirma-item.model';
import { IncapacidadItem } from '../../../models/incapacidad-item.model';
import { VacacionesItem } from 'src/app/models/vacaciones-item.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  seccion: string;
  registro: any;
  // registro: CalidadItem[] | CapaItem[] | DescansoItem[] | FaltaItem[] | FallaHomeOfficeItem[]
  //           | FaltaItem[] | FirmaDesfirmaItem[] | IncapacidadItem[] | VacacionesItem[];

  constructor(public bitacora: BitacoraService,
              private route: ActivatedRoute,
              private location: Location) {

    this.seccion = this.route.snapshot.paramMap.get('seccion');
    switch ( this.seccion ){
      case 'calidad': this.registro = this.bitacora.calidadLista;
                      break;
      case 'capacitacion': this.registro = this.bitacora.capacitacion;
                           break;
      case 'descansos': this.registro = this.bitacora.descansos;
                        break;
      case 'homeOffice': this.registro = this.bitacora.fallasHomeOffice;
                         break;
      case 'faltas': this.registro = this.bitacora.faltas;
                     break;
      case 'firma': this.registro = this.bitacora.firmaDesfirmas;
                    break;
      case 'incapacidades': this.registro = this.bitacora.incapacidades;
                            break;
      case 'vacaciones': this.registro = this.bitacora.vacaciones;
                         break;
      default: this.location.back();
    }
    console.log(this.registro.fecha);
    
  }

  ngOnInit() {
  }

  verItem( id: number){}

  borrarItem( id: number ){
    this.registro =  this.registro.filter( listaData => listaData.id !== id);
    switch ( this.seccion ){
      case 'calidad': this.bitacora.calidadLista = this.registro;
                      break;
      case 'capacitacion': this.bitacora.capacitacion = this.registro;
                           break;
      case 'descansos': this.bitacora.descansos = this.registro;
                        break;
      case 'homeOffice': this.bitacora.fallasHomeOffice = this.registro;
                         break;
      case 'faltas': this.bitacora.faltas = this.registro;
                     break;
      case 'firma': this.bitacora.firmaDesfirmas = this.registro;
                    break;
      case 'incapacidades': this.bitacora.incapacidades = this.registro;
                            break;
      case 'vacaciones': this.bitacora.vacaciones = this.registro;
                         break;
    }
    this.bitacora.saveStorage( this.seccion );

  }

  editarItem( id: number ){

  }

  agregarItem(){}

}
