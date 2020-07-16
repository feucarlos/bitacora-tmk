import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'horadeldia'
})
export class HoradeldiaPipe implements PipeTransform {

  transform(value: number): string {
    const hora =  Math.floor(value / 60);
    const min = value % 60;
    let htime = '';
    let hmin = '';
    if (hora < 10 ) {
      htime = `0${hora}`;
    } else {
      htime = `${hora}`;
    }
    if ( min < 10 ){
      hmin = `0${min}`;
    } else {
      hmin = `${min}`;
    }
    return htime + ':' + hmin;
  }

}
