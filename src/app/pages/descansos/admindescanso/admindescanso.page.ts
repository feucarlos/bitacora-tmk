import { Component, OnInit } from '@angular/core';
import { BitacoraService } from '../../../services/bitacora.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DescansoItem } from '../../../models/descanso-item.model';

@Component({
  selector: 'app-admindescanso',
  templateUrl: './admindescanso.page.html',
  styleUrls: ['./admindescanso.page.scss'],
})
export class AdmindescansoPage implements OnInit {

  item: DescansoItem;
  ico: string;
  readonly: boolean;
  accion: string;

  constructor(public bitacora: BitacoraService,
              private route: ActivatedRoute, public router: Router) {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.item = this.bitacora.descansos.find( listaData => listaData.id === id);
    if ( this.route.snapshot.paramMap.get('do') === 'ver') {
      this.readonly = true;
      this.ico = 'information-circle';
    } else if ( this.route.snapshot.paramMap.get('do') === 'editar'){
      this.readonly = false;
      this.ico = 'create-outline';
    } else {
      this.router.navigateByUrl('/tabs/tab2/descansos');
    }
  }

  ngOnInit() {
  }

  saveChanges(){
    this.bitacora.saveStorage( 'descansos' );
    this.bitacora.presentToast('Descripción actualizada');
  }

}
