import { Component, OnInit, ViewChild } from '@angular/core';
import { BitacoraService } from '../../services/bitacora.service';
import { AlertController, IonList } from '@ionic/angular';
import { IncapacidadItem } from '../../models/incapacidad-item.model';


@Component({
  selector: 'app-incapacidades',
  templateUrl: './incapacidades.page.html',
  styleUrls: ['./incapacidades.page.scss'],
})
export class IncapacidadesPage implements OnInit {

  @ViewChild ( IonList ) lista: IonList;
  item: IncapacidadItem;

  constructor(public bitacora: BitacoraService,
              private alertController: AlertController) {

    this.item = new IncapacidadItem();

  }

  ngOnInit() {
  }

  borrarItem( item: IncapacidadItem){
    this.bitacora.borrarIncapacidad( item );
  }

  async agregarInca( item?: IncapacidadItem, opcion?: string ) {

    let inca = new IncapacidadItem();
    if ( item ) { inca = item; }

    const alert = await this.alertController.create({
      header: 'Agregar incapacidad',
      inputs: [
      {
         name: 'fecha',
         type: 'date',
        value: inca.fecha
      },
      {
         name: 'dias',
         type: 'number',
          min: 1,
        value: inca.dias
      },
      {
        name: 'desc',
        type: 'text',
        placeholder: 'Descripción (opcional)',
        value: inca.desc
      }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: (opcion === 'editar' ? 'Actualizar' : 'Agregar'),
          handler: (data) => {
            inca.fecha = data.fecha;
            inca.desc = data.desc;
            inca.dias = data.dias;
            inca.ymd = Number( inca.fecha.substr(0, 4)) * 10000
                     + Number( inca.fecha.substr(5, 2) ) * 100
                     + Number( inca.fecha.substr(8, 2) );
            if ( opcion === 'editar') {
              this.bitacora.saveStorage( 'incapacidades' );
            } else {
              this.bitacora.agregarIncapacidad( inca );
            }
            this.lista.closeSlidingItems();
          }
        }
      ]
    });

    await alert.present();
  }

}
