import { Component, OnInit } from '@angular/core';
import { BitacoraService } from '../../../services/bitacora.service';
import { FallaHomeOfficeItem } from '../../../models/falla-home-office-item.model';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  item: FallaHomeOfficeItem;
  icon: string;
  readonly: boolean;
  accion: string;
  id: number;
  radioCasa: boolean;
  radioTec: boolean;
  msgbtn: string;


  constructor(public bitacora: BitacoraService,
              private location: Location,
              private route: ActivatedRoute) {

    this.accion = this.route.snapshot.paramMap.get('do');

    if (this.accion === 'ver' || this.accion === 'editar'){
      this.id = Number ( this.route.snapshot.paramMap.get('id') );
      this.item = this.bitacora.fallasHomeOffice.find( data => data.id === this.id);
    }

    if ( this.accion === 'agregar' ) {
      this.item = new FallaHomeOfficeItem();
    }

    if ( this.accion === 'agregar' || this.accion === 'editar') {
      this.readonly = false;
      this.radioCasa = false;
      this.radioTec = false;
      this.icon = 'create-outline';
    }

    this.msgbtn = this.accion === 'agregar' ? 'Agregar falla' : 'Actualizar registro';

    if ( this.accion === 'ver') {
      this.readonly = true;
      this.icon = 'information-circle';
      this.radioCasa = false;
      this.radioTec = true;
      if ( this.item.lugar === 'Tec' ){
        this.radioCasa = true;
        this.radioTec = false;
      }
    }
  }

  ngOnInit() {
  }

  agregarFalla(){
    const inicio = Number(this.item.hInicio.substr(0, 2) ) * 60 + Number( this.item.hInicio.substr(3, 2) );
    const final = Number(this.item.hFinal.substr(0, 2) ) * 60 + Number( this.item.hFinal.substr(3, 2) );
    if ( final <= inicio ) {
        this.bitacora.presentToast('Error en hora final');
        return;
    } else {
      this.item.tiempo = final - inicio;
    }
    this.item.fecha = this.item.fecha.substr(0, 10);
    if (this.accion === 'agregar') {
      this.bitacora.agregarfallaHomeOffice( this.item );
    } else {
      this.bitacora.saveStorage('fallasHomeOffice');
    }
    this.bitacora.presentToast('Registro guardado');
    this.location.back();
  }

}
