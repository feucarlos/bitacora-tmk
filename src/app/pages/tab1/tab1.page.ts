import { Component } from '@angular/core';
import { BitacoraService } from '../../services/bitacora.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  mensaje = 3695;
  constructor( public bitacora: BitacoraService ) {}
}
