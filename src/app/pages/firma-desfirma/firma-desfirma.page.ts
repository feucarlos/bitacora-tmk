import { Component, OnInit, ViewChild } from '@angular/core';
import { BitacoraService } from '../../services/bitacora.service';
import { FirmaDesfirmaItem } from '../../models/firma-desfirma-item.model';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-firma-desfirma',
  templateUrl: './firma-desfirma.page.html',
  styleUrls: ['./firma-desfirma.page.scss'],
})
export class FirmaDesfirmaPage implements OnInit {

  @ViewChild ( IonList ) lista: IonList;
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

  async agregarFD( item: FirmaDesfirmaItem, opcion?: string ) {

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
        },
        {
          text: (opcion === 'editar' ? 'Actualizar' : 'Agregar'),
          handler: (data) => {
            firma.fecha = data.fecha;
            firma.hora = data.hora;
            firma.desc = data.desc;
            firma.ymd = Number( firma.fecha.substr(0, 4)) * 10000 
            + Number( firma.fecha.substr(5, 2) ) * 100 + Number( firma.fecha.substr(8, 2) );
            if ( opcion === 'editar') {
              this.bitacora.saveStorage( 'firmaDesfirmas' );
            } else {
              this.bitacora.agregarFirmaDesfirmas( firma );
            }
            this.lista.closeSlidingItems();
          }
        }
      ]
    });

    await alert.present();
  }

}

