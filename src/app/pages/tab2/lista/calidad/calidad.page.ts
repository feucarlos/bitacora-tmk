import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BitacoraService } from '../../../../services/bitacora.service';
import { CalidadItem } from '../../../../models/calidad-item.model';

@Component({
  selector: 'app-calidad',
  templateUrl: './calidad.page.html',
  styleUrls: ['./calidad.page.scss'],
})
export class CalidadPage implements OnInit {

  accion = '';
  id: number;
  accionIco = '';
  item: CalidadItem;
  dayShortNames: string;
  monthShortNames: string;
  readonly: boolean;
  yearValues: string;


  constructor(public bitacora: BitacoraService,
              private route: ActivatedRoute,
              private location: Location) {

    this.readonly = false;

    this.accion = this.route.snapshot.paramMap.get('do');
    if ( this.accion === 'ver' ) {
      this.accionIco = 'information-circle-outline';
      this.readonly = true;
    }

    if ( this.accion === 'editar' ) {
      this.accionIco = 'create-outline';
    }

    if ( this.accion === 'add'){
      this.item = new CalidadItem();
      this.accionIco = 'create-outline';
    } else {
      this.id = Number(this.route.snapshot.paramMap.get('id'));
      this.item = this.bitacora.calidadLista.find( listaData => listaData.id === this.id);
    }

    this.dayShortNames = 'dom, lun, mar, mie, jue, vie, sab, dom';
    this.monthShortNames = 'ene, feb, mar, abr, may, jun, jul, ago, sep, oct, nov, dic';

  }

  ngOnInit() {
  }

  saveChanges(){
    if (this.item.calificacion > 10 || this.item.calificacion < 0){
      this.bitacora.presentToast('Revisa la calificación');
      return;
    }

    if ( this.accion === 'add'){
      this.bitacora.agregarCalidad( this.item );
    } else {
      this.bitacora.saveStorage( 'calidad' );
    }

    this.bitacora.presentToast('Bitacora actualizada');
    this.location.back();

  }

  cambioFecha(){
    const fecha = new Date( this.item.fecha );
    this.item.ymd = fecha.getFullYear() * 10000 + fecha.getMonth() * 100 + 100 + fecha.getDate();
  }

}
