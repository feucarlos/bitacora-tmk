import { Component, OnInit } from '@angular/core';
import { BitacoraService } from '../../services/bitacora.service';
import { AlertController } from '@ionic/angular';
import { FaltaItem } from '../../models/falta-item.model';

@Component({
  selector: 'app-faltas',
  templateUrl: './faltas.page.html',
  styleUrls: ['./faltas.page.scss'],
})
export class FaltasPage implements OnInit {

  constructor(public bitacora: BitacoraService,
              private alertController: AlertController) {
              }

  ngOnInit() {
  }

  async agregarFalta() {
    const alert = await this.alertController.create({
      header: 'Agregar falta',
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
            if( !data.fecha.length ) { return; }
            this.bitacora.agregarFalta( data.fecha, data.desc );
          }
        }
      ]
    });
    await alert.present();
  }

  borrarFalta(item: FaltaItem) {
    console.log(`Borrando ${item.id}`);
  }

  async editarFalta(item: FaltaItem) {
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
          if( !data.desc ) { return; }
          item.desc = data.desc;
          this.bitacora.saveStorage();
        }
      }
      ]
    });
  
    await alert.present();
  }

}
