import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duracion'
})
export class DuarcionPipe implements PipeTransform {

  transform(value: number): string {
    const hora =  Math.floor(value / 60);
    const min = value % 60;
    let htime = '';
    if (hora === 1 ) {
      htime = `1 hora`;
    } else if (hora > 1){
      htime = `${hora} h`;
    }
    if ( min === 0 ){
      return htime;
    } else {
      return (hora === 0 ? (htime + `${min} min`) : (htime + `, ${min} min`) );
    }
  }

}
