import { Component, OnInit, ViewChild } from '@angular/core';
import { CalidadItem } from '../../models/calidad-item.model';
import { AlertController, IonList } from '@ionic/angular';
import { BitacoraService } from '../../services/bitacora.service';

@Component({
  selector: 'app-calidad',
  templateUrl: './calidad.page.html',
  styleUrls: ['./calidad.page.scss'],
})
export class CalidadPage implements OnInit {

  @ViewChild( IonList ) lista: IonList;

  constructor( public bitacora: BitacoraService,
               public alertController: AlertController) {}

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
    const alert = await this.alertController.create({
      header: 'Editar descripción',
      inputs: [
        {
          name: 'desc',
          type: 'text',
          value: item.desc,
          placeholder: 'Descripción (opcional)'
        }
        ],
      buttons: [
      {
        text: 'Cancelar',
        role: 'cancel'
      },
      {
        text: 'Aceptar',
        handler: (data) => {
          if ( !data.desc ) { return; }
          item.desc = data.desc;
          this.bitacora.saveStorage( 'calidad' );
          this.lista.closeSlidingItems();
        }
      }
      ]
    });
    await alert.present();
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
    this.bitacora.calidadLista.sort( (a, b) => a.ymd - b.ymd );
    this.bitacora.saveStorage('calidad');

  }
}
