import { Component, OnInit } from '@angular/core';
import { BitacoraService } from '../../services/bitacora.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-item',
  templateUrl: './editar-item.page.html',
  styleUrls: ['./editar-item.page.scss'],
})
export class EditarItemPage implements OnInit {

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
