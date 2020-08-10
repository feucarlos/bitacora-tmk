import { Component } from '@angular/core';
import { CalidadItem } from '../../models/calidad-item.model';
import { addDays } from 'date-fns';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  fecha: Date;
  fecha1: string;
  fecha2: string;
  cal: CalidadItem;
  hora: string;
  hora2: string;

  constructor() {

    this.cal = new CalidadItem();

    this.fecha = new Date();
    this.fecha1 = '2020-11-27T00:00:00-00:00';
    this.fecha2 = '2020-11-27T07:30:00-00:00';
    this.hora = '2020-12-16T19:30:00-06:00';
    this.hora2 = '15:45';
    // this.cal.fechaIonic();

  }

  ver(){
    console.log(this.fecha1);
    this.fecha = new Date();
    console.log(this.hora);
    console.log( this.hora2 );
    
  }

}
