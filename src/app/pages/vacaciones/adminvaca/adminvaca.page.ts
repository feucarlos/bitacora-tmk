import { Component, OnInit } from '@angular/core';
import { BitacoraService } from '../../../services/bitacora.service';
import { ActivatedRoute } from '@angular/router';
import { VacacionesItem } from '../../../models/vacaciones-item.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-adminvaca',
  templateUrl: './adminvaca.page.html',
  styleUrls: ['./adminvaca.page.scss'],
})
export class AdminvacaPage implements OnInit {

  titulo: string;
  item: VacacionesItem;
  icon: string;
  readonly: boolean;
  todo: string;
  id: number;
  msgbtn: string;
  periodo: string;
  periodoIni: string;
  anioPeriodoValues: string;
  yearValues: string;
  dayShortNames: string;
  monthShortNames: string;

  constructor(public bitacora: BitacoraService,
              private route: ActivatedRoute,
              private location: Location) {

    this.todo = this.route.snapshot.paramMap.get('do');
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    if ( this.todo === 'add'){
      this.titulo = 'Agregar periodo';
      this.item = new VacacionesItem();
      this.readonly = false;
      this.msgbtn = 'Agregar';
    } else {
      console.log(this.id);
      this.item = this.bitacora.vacaciones.find( data => data.id === this.id );
      console.log(this.item);

      if ( !this.item ){
        this.bitacora.presentToast('no se encontró registro');
        this.item = new VacacionesItem();
      }

    }

    this.dayShortNames = 'dom, lun, mar, mie, jue, vie, sab, dom';
    this.monthShortNames = 'ene, feb, mar, abr, may, jun, jul, ago, sep, oct, nov, dic';

    this.periodo = this.item.periodo.substr( 7, 4 );
    this.anioPeriodoValues = this.item.fecha.substr(0, 4) + ',' + (Number(this.item.fecha.substr(0, 4)) - 1) ;
    this.updatePeriodo();

    if ( this.todo === 'ver'){
      this.readonly = true;
      this.titulo = 'Información del periodo';
    } else if ( this.todo === 'edit'){
      this.msgbtn = 'Actualizar';
      this.readonly = false;
      this.titulo = 'Actualizar periodo';
    }

  }

  ngOnInit() {
  }

  updatePeriodo(){
    this.periodo = this.periodo.substr(0, 4);
    this.item.periodo =  Number(this.periodo.substr(0, 4)) - 1 + ' - ' + this.periodo.substr(0, 4);
    this.periodoIni = String( Number(this.periodo.substr(0, 4)) - 1 ) ;
    this.yearValues =  (Number(this.periodo.substr(0, 4)) + 1) + ',' + this.periodo.substr(0, 4);
  }

  agregarVaca(){
    this.item.fecha = this.item.fecha.substr(0, 10);
    this.item.fechaFin = this.item.fechaFin.substr(0, 10);

    this.item.ymd = Number(this.item.fecha.substr(0, 4)) * 10000
                  + (Number(this.item.fecha.substr(5, 2)) + 1) * 100
                  + Number(this.item.fecha.substr(8, 2));
    this.item.ymdFin = Number(this.item.fechaFin.substr(0, 4)) * 10000
    + (Number(this.item.fechaFin.substr(5, 2)) + 1) * 100
    + Number(this.item.fechaFin.substr(8, 2));

    const fini = new Date( this.item.fecha ).getTime();
    const ffin = new Date( this.item.fechaFin ).getTime();
    this.item.dias = (ffin - fini) / 1000 / 60 / 60 / 24 + 1;

    if ( this.item.ymd > this.item.ymdFin ){
      this.bitacora.presentToast('Error en fechas');
      return;
    }

    if ( this.todo === 'add' ){
      this.bitacora.agregarVaca( this.item );
      this.bitacora.presentToast('Registro agregado');
    } else if ( this.todo === 'edit' ){
      this.bitacora.saveStorage( 'vacaciones' );
    }

    this.location.back();
  }

}
