import { Component, OnInit } from '@angular/core';
import { BitacoraService } from '../../services/bitacora.service';
import { FirmaDesfirmaItem } from '../../models/firma-desfirma-item.model';


@Component({
  selector: 'app-firma-desfirma',
  templateUrl: './firma-desfirma.page.html',
  styleUrls: ['./firma-desfirma.page.scss'],
})
export class FirmaDesfirmaPage implements OnInit {

  constructor(public bitacora: BitacoraService) {

  }

  ngOnInit() {
  }

  borrarItem( item: FirmaDesfirmaItem){
    console.log('Borrando item');
  }

  editarItem(item: FirmaDesfirmaItem){
    console.log('editando item');
  }

  agregarFD(){
    console.log('Agregando item');
  }
}
