import { Component, OnInit } from '@angular/core';
import { BitacoraService } from '../../services/bitacora.service';
import { FallaHomeOfficeItem } from '../../models/falla-home-office-item.model';

@Component({
  selector: 'app-fallas-homeoffice',
  templateUrl: './fallas-homeoffice.page.html',
  styleUrls: ['./fallas-homeoffice.page.scss'],
})
export class FallasHomeofficePage implements OnInit {

  constructor(public bitacora: BitacoraService) { }

  ngOnInit() {
  }

  borrarItem( item: FallaHomeOfficeItem ){
    this.bitacora.borrarFallaHomeOffice( item );
  }
}
