import { Component } from '@angular/core';
import { BitacoraService } from '../../services/bitacora.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor( public bitacora: BitacoraService ) {
    this.bitacora.agregarFalta(1974, 11, 27, 'Cumpleaños');
    this.bitacora.agregarFalta(1979, 10, 16);
  }


}
