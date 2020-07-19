import { Component, OnInit, ViewChild } from '@angular/core';
import { BitacoraService } from '../../services/bitacora.service';
import { DescansoItem } from 'src/app/models/descanso-item.model';
import { AlertController, IonList } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-descansos',
  templateUrl: './descansos.page.html',
  styleUrls: ['./descansos.page.scss'],
})
export class DescansosPage implements OnInit {

  @ViewChild ( IonList ) listaItem: IonList;
  descanso: DescansoItem;

  constructor(public bitacora: BitacoraService,
              private alertController: AlertController,
              private route: Router) { }

  ngOnInit() {
  }

  async agregarDescansoAlert(){
    const alert = await this.alertController.create({
      header: 'Agregar fecha',
      // subHeader: 'Subtitle',
      inputs: [
      {
        name: 'fecha',
        type: 'date'
      },
      {
        name: 'desc',
        type: 'text',
        placeholder: 'Descripción (opcional)'
      }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
          // handler: () => { console.log('Cancelar'); }
        },
        {
          text: 'Agregar',
          handler: (data) => {
            if ( !data.fecha.length ) { return; }
            this.agregarDescanso( data.fecha, data.desc );
          }
        }
      ]
    });
    await alert.present();

  }

  agregarDescanso( fecha: string, desc: string ){
    const nFecha = new Date(fecha);
    nFecha.setTime( nFecha.getTime() + nFecha.getTimezoneOffset() * 60 * 1000 );
    this.descanso = new DescansoItem(nFecha, false, desc );
    if ( !this.descansoRegistrado(this.descanso) ){
      this.bitacora.agregarDescanso( this.descanso );
    }
  }

  descansoRegistrado(descanso: DescansoItem){
    const dia = this.descanso.fecha.getDay();
    let inicio: number;
    let fin: number;
    if ( this.descanso.fecha.getDay() === 0 ) {
      inicio = this.descanso.fecha.getTime() - (1000 * 60 * 60 * 24 * 6);
    }
    else {
      inicio = this.descanso.fecha.getTime() - (1000 * 60 * 60 * 24 * (dia - 1));
    }

    if ( this.descanso.fecha.getDay() === 0 ) {
      fin = this.descanso.fecha.getTime();
    }
    else {
      fin = this.descanso.fecha.getTime() + (1000 * 60 * 60 * 24 * (7 - dia) );
    }

    return this.bitacora.buscaSemanaOcupada(inicio, fin);
  }

  borrarDescanso( item: DescansoItem ){
    this.bitacora.borrarDescanso( item );
  }

  editarDescanso(item: DescansoItem) {
  this.route.navigate( ['/tabs/tab2/', 'descansos', 'editar', item.id] );
  this.listaItem.closeSlidingItems();
  }
}
