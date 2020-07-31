import { Component, OnInit } from '@angular/core';
import { BitacoraService } from '../../../services/bitacora.service';
import { ActivatedRoute } from '@angular/router';
import { VacacionesItem } from '../../../models/vacaciones-item.model';

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
  yearValues: string;
  accion: string;
  dayShortNames: string;
  monthShortNames: string;

  constructor(public bitacora: BitacoraService,
              private route: ActivatedRoute) {

    this.todo = this.route.snapshot.paramMap.get('do');
    
    if ( this.todo === 'add'){
      this.titulo = 'Agregar periodo';
      this.item = new VacacionesItem();
      this.readonly = false;
      this.msgbtn = 'Agregar';
    } else {
      this.id = Number(this.route.snapshot.paramMap.get('id'));
      this.item = this.bitacora.vacaciones.find( data => data.id === this.id );
      this.accion = 'add';
      // TODO si no existe el registro regresar a la página anterior
    }

    this.dayShortNames = this.item.dayShortNames();
    this.monthShortNames = this.item.monthShortNames();

    this.periodo = this.item.periodo.substr( 7, 4 );
    this.updatePeriodo();

    if ( this.todo === 'ver'){
      this.readonly = true;
      this.titulo = 'Información del periodo';
      this.accion = 'ver';
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

    this.item.ymd = this.item.dateToYmd( this.item.fecha );
    this.item.ymdFin = this.item.dateToYmd( this.item.fechaFin );

    const fini = new Date( this.item.fecha ).getTime();
    const ffin = new Date( this.item.fechaFin ).getTime();
    this.item.dias = (ffin - fini) / 1000 / 60 / 60 / 24 + 1;

    if ( this.item.ymd > this.item.ymdFin ){
      this.bitacora.presentToast('Error en fechas');
      return;
    }

    console.log(this.item);
    

  }

}
