import { Component, OnInit, ViewChild } from '@angular/core';
import { BitacoraService } from '../../services/bitacora.service';
import { FallaHomeOfficeItem } from '../../models/falla-home-office-item.model';
import { Router } from '@angular/router';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-fallas-homeoffice',
  templateUrl: './fallas-homeoffice.page.html',
  styleUrls: ['./fallas-homeoffice.page.scss'],
})
export class FallasHomeofficePage implements OnInit {

  @ViewChild ( IonList ) listaItem: IonList;

  constructor(public bitacora: BitacoraService,
              private router: Router) { }

  ngOnInit() {
  }

  borrarItem( item: FallaHomeOfficeItem ){
    this.bitacora.borrarFallaHomeOffice( item );
  }

  nuevoItem(){
    this.router.navigate(['/tabs/tab2/fallas-homeoffice', 'agregar'] );
  }

  verItem( item: FallaHomeOfficeItem ){
    this.router.navigate(['/tabs/tab2/fallas-homeoffice', 'ver', item.id] );
  }

  editarItem( item: FallaHomeOfficeItem ){
    this.router.navigate(['/tabs/tab2/fallas-homeoffice', 'editar', item.id] );
    this.listaItem.closeSlidingItems();
  }
}
