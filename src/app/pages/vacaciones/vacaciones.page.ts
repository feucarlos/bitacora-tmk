import { Component, OnInit, ViewChild } from '@angular/core';
import { BitacoraService } from '../../services/bitacora.service';
import { VacacionesItem } from '../../models/vacaciones-item.model';
import { Router } from '@angular/router';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-vacaciones',
  templateUrl: './vacaciones.page.html',
  styleUrls: ['./vacaciones.page.scss'],
})
export class VacacionesPage implements OnInit {

  @ViewChild ( IonList ) listaItem: IonList;

  constructor(public bitacora: BitacoraService,
              private route: Router) {
    const vaca = new VacacionesItem();
  }

  ngOnInit() {
  }

  borrarItem(item: VacacionesItem){
    this.bitacora.vacaciones = this.bitacora.vacaciones.filter( data => data.id !== item.id );
    this.bitacora.saveStorage( 'vacaciones' );
  }

  adminItem(item?: VacacionesItem, todo?: string ){
    if ( item ) {
      console.log('what are you doing? ', todo);
      this.route.navigate( ['tabs/tab2/vacaciones', todo, item.id] );
      this.listaItem.closeSlidingItems();
    } else {
      this.route.navigate( ['tabs/tab2/vacaciones', 'add'] );
    }
  }

}
