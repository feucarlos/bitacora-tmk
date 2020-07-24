import { Component, OnInit, ViewChild } from '@angular/core';
import { CalidadItem } from '../../models/calidad-item.model';
import { AlertController, IonList } from '@ionic/angular';
import { BitacoraService } from '../../services/bitacora.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calidad',
  templateUrl: './calidad.page.html',
  styleUrls: ['./calidad.page.scss'],
})
export class CalidadPage implements OnInit {

  @ViewChild( IonList ) listaItem: IonList;

  constructor( public bitacora: BitacoraService,
               public alertController: AlertController,
               public route: Router) {}

  ngOnInit() {
  }

  async agregarCalificacion() {
    const alert = await this.alertController.create({
      header: 'Agregar calificación',
      // subHeader: 'Subtitle',
      inputs: [
      {
        name: 'fecha',
        type: 'date'
      },
      {
        name: 'calificacion',
        type: 'number',
        min: '0',
        max: '10',
        placeholder: 'Calificación'
      },
      {
        name: 'desc',
        type: 'textarea',
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
            if ( !data.calificacion ) { return; }
            this.validaCalidad( data.fecha, data.calificacion, data.desc );
          }
        }
      ]
    });
    await alert.present();
  }

  borrarCalidad(item: CalidadItem) {
    this.bitacora.borrarCalidad( item );
  }

  async editarCalidad(item: CalidadItem) {
    this.listaItem.closeSlidingItems();
    this.route.navigate( ['/tabs/tab2/calidad', 'editar', item.id] );
  }

  validaCalidad(fecha: Date, calificacion: number, desc: string ){
    // console.log(`Validando ${ fecha}, ${ calificacion }, ${ desc }`);
    const nFecha = new Date(fecha);
    nFecha.setTime( nFecha.getTime() + nFecha.getTimezoneOffset() * 60 * 1000 );
    if ( calificacion < 0 || calificacion > 10 ) {
      this.bitacora.presentToast('Error en calificación');
      return;
    }
    this.bitacora.agregarCalidad( nFecha, calificacion, desc);
  }

  verDesc( item: CalidadItem ){
    if ( !item.desc ){ return; }
    this.route.navigate( ['/tabs/tab2/calidad', 'ver', item.id] );
  }
}
