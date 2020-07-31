import { Component, OnInit } from '@angular/core';
import { BitacoraService } from '../../services/bitacora.service';
import { VacacionesItem } from '../../models/vacaciones-item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vacaciones',
  templateUrl: './vacaciones.page.html',
  styleUrls: ['./vacaciones.page.scss'],
})
export class VacacionesPage implements OnInit {

  constructor(public bitacora: BitacoraService,
              private route: Router) {
    const vaca = new VacacionesItem();
  }

  ngOnInit() {
  }

  borrarItem(item: VacacionesItem){

  }

  agregarItem(item?: VacacionesItem, todo?: string ){
    if ( item ) {
      this.route.navigate( ['tabs/tab2/vacaciones', todo, item.id] );
    } else {
      this.route.navigate( ['tabs/tab2/vacaciones', 'add'] );
    }
  }

}
