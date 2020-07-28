import { Component, OnInit } from '@angular/core';
import { BitacoraService } from '../../services/bitacora.service';
import { FirmaDesfirmaItem } from '../../models/firma-desfirma-item.model';
import { AlertController } from '@ionic/angular';
import { time } from 'console';


@Component({
  selector: 'app-firma-desfirma',
  templateUrl: './firma-desfirma.page.html',
  styleUrls: ['./firma-desfirma.page.scss'],
})
export class FirmaDesfirmaPage implements OnInit {

  item: FirmaDesfirmaItem;

  constructor(public bitacora: BitacoraService,
              private alertController: AlertController) {

    this.item = new FirmaDesfirmaItem();
    console.log( this.item.fecha, this.item.hora, this.item.ymd, this.item.horaTomin() );
  }

  ngOnInit() {
  }

  borrarItem( item: FirmaDesfirmaItem){
    this.bitacora.borrarFirmaDesfirma( item );
  }

  // editarItem(item: FirmaDesfirmaItem){
  //   this.agregarFD( item )
  // }

  async agregarFD( item?: FirmaDesfirmaItem ) {
    
    let firma = new FirmaDesfirmaItem();
    if ( item ) { firma = item; }

    const alert = await this.alertController.create({
      header: 'Agregar firma/desfirma',
      inputs: [
      {
        name: 'fecha',
        type: 'date',
        value: firma.fecha
      },
      {
        name: 'hora',
        type: 'time',
        value: firma.hora
      },
      {
        name: 'desc',
        type: 'text',
        placeholder: 'Descripción (opcional)',
        value: firma.desc
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
            firma.fecha = data.fecha;
            firma.hora = data.hora;
            firma.desc = data.desc;
            firma.update();
            console.log( firma.fecha, firma.hora, firma.ymd, firma.desc);
            this.bitacora.agregarFirmaDesfirmas( firma );
          }
        }
      ]
    });

    await alert.present();
  }

}

