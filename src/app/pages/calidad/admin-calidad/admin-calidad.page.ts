import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BitacoraService } from '../../../services/bitacora.service';


@Component({
  selector: 'app-admin-calidad',
  templateUrl: './admin-calidad.page.html',
  styleUrls: ['./admin-calidad.page.scss'],
})
export class AdminCalidadPage implements OnInit {

  accion = '';
  id: number;
  item: any;
  accionIco = '';
  // desc: string;

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
    this.item = this.bitacora.calidadLista.find( listaData => listaData.id === this.id);
    // this.desc = this.item.desc;
  }

  ngOnInit() {
  }

  saveChanges(){
    // this.item.desc = this.desc;
    if ( this.item.desc === '' ){
      this.item.withDes = false;
    }
    this.bitacora.saveStorage( 'calidad' );
    this.bitacora.presentToast('Descripción actualizada');
  }

}
