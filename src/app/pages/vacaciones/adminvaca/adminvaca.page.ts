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
  radioCasa: boolean;
  radioTec: boolean;
  msgbtn: string;
  periodo: number;

  constructor(public bitacora: BitacoraService,
              private route: ActivatedRoute) {

    this.todo = this.route.snapshot.paramMap.get('do');

    if ( this.todo === 'add'){
      this.titulo = 'Agregar periodo';
      this.item = new VacacionesItem();
      this.readonly = false;
    } else {
      this.id = Number(this.route.snapshot.paramMap.get('id'));
      this.item = this.bitacora.vacaciones.find( data => data.id === this.id );
      // TODO si no existe el registro regresar a la página anterior
    }

    if ( this.todo === 'ver'){
      this.readonly = true;
      this.titulo = 'Información del periodo';
    } else if( this.todo === 'edit'){
      this.readonly = false;
      this.titulo = 'Actualizar periodo';
    }

    this.periodo = Number(this.item.periodo);
    

  }

  ngOnInit() {
  }

}
