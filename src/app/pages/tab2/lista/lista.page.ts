import { Component, OnInit, ViewChild } from '@angular/core';
import { BitacoraService } from '../../../services/bitacora.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  @ViewChild ( IonList ) lista: IonList;

  seccion: string;
  registro: any;
  item: any;
  // registro: CalidadItem[] | CapaItem[] | DescansoItem[] | FaltaItem[] | FallaHomeOfficeItem[]
  //           | FaltaItem[] | FirmaDesfirmaItem[] | IncapacidadItem[] | VacacionesItem[];

  constructor(public bitacora: BitacoraService,
              private activatedRoute: ActivatedRoute,
              private location: Location,
              private router: Router) {

    this.seccion = this.activatedRoute.snapshot.paramMap.get('seccion');
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

  }

  ngOnInit() {
  }

  verItem( id: number){
    this.router.navigate( [ '/tabs/tab2/', 'calidad', 'ver', id ]);
  }

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
    this.lista.closeSlidingItems();
    if (this.seccion === 'calidad') {
      this.router.navigate( [ '/tabs/tab2/calidad/editar', id ]);
    }


  }

  agregarItem(){
    switch ( this.seccion ){
      case 'calidad': this.router.navigateByUrl('/tabs/tab2/calidad/add');
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
    }

  }

}
