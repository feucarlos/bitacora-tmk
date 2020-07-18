import { Component, OnInit } from '@angular/core';
import { BitacoraService } from '../../services/bitacora.service';
import { ActivatedRoute } from '@angular/router';
import { CalidadItem } from '../../models/calidad-item.model';


@Component({
  selector: 'app-editar-item',
  templateUrl: './editar-item.page.html',
  styleUrls: ['./editar-item.page.scss'],
})
export class EditarItemPage implements OnInit {

  accion = '';
  id: number;
  calidad: CalidadItem;
  accionIco = '';
  desc: string;

  constructor(public bitacora: BitacoraService,
              public route: ActivatedRoute) {

    this.accion = this.route.snapshot.paramMap.get('do');
    if ( this.accion === 'ver' ) {
      this.accionIco = 'information-circle-outline';
    }

    if ( this.accion === 'editar' ) {
      this.accionIco = 'create-outline';
    }

    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.calidad = this.bitacora.obtenerLista( 'calidad', this.id);
    this.desc = this.calidad.desc;
  }

  ngOnInit() {
  }

  saveChanges(){
    this.calidad.desc = this.desc;
    this.bitacora.saveStorage('calidad');
    this.bitacora.presentToast('Descripción actualizada');
  }

}
