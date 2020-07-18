import { Component, OnInit, ViewChild } from '@angular/core';
import { BitacoraService } from '../../services/bitacora.service';
import { CapaItem } from '../../models/capa-item.model';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-capacitacion',
  templateUrl: './capacitacion.page.html',
  styleUrls: ['./capacitacion.page.scss'],
})
export class CapacitacionPage implements OnInit {
  
  @ViewChild( IonList ) listaItem: IonList;

  constructor(public bitacora: BitacoraService,
              public alertController: AlertController) { }

  ngOnInit() {
  }


  async agregarCapaAlert(){
    const alert = await this.alertController.create({
      header: 'Agregar fecha, hora de inicio y de finalización',
      // subHeader: 'Subtitle',
      inputs: [
      {
        name: 'fecha',
        type: 'date'
      },
      {
        name: 'hInicio',
        type: 'time',
      },
      {
        name: 'hFinal',
        type: 'time',
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
            if ( !data.hInicio.length ) { return; }
            if ( !data.hFinal.length ) { return; }
            this.agregarCapa( data.fecha, data.hInicio, data.hFinal, data.desc );
          }
        }
      ]
    });
    await alert.present();

  }

  agregarCapa( fecha: string, hInicio: string, hFinal: string, desc?: string ){
    let error = false;
    const nFecha = new Date( fecha );
    nFecha.setTime( nFecha.getTime() + nFecha.getTimezoneOffset() * 60 * 1000 );
    const capa = new CapaItem(nFecha, hInicio, hFinal, desc);
    if ( capa.hInicio >= capa.hFinal ) {
      error = true;
      this.bitacora.presentToast('Error en hora de inicio y hora final');
    }
    error = this.superpone( capa );
    if ( !error ) {
      this.bitacora.agregarCapa( capa );
    }
  }

  borrarCapa( item: CapaItem ){
    this.bitacora.borrarCapa( item );
  }

  async editarCapa(item: CapaItem) {
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
          this.bitacora.saveStorage( 'capacitacion' );
          this.listaItem.closeSlidingItems();
        }
      }
      ]
    });
    await alert.present();
  }

  superpone( capa: CapaItem ): boolean {
    for  ( const item of this.bitacora.capacitacion ){
      if ( capa.ymd === item.ymd ){
        if ( capa.hInicio >= item.hInicio && capa.hInicio <= item.hFinal) {
          this.bitacora.presentToast('Inicio coincide con en intervalo de otro registro');
          return true;
        }
        if ( capa.hFinal >= item.hInicio && capa.hFinal <= item.hFinal ){
          this.bitacora.presentToast('Final coincide con en intervalo de otro registro');
          return true;
        }
      }
    }
    return false;
  }

}
