import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDesc'
})
export class ShortDescPipe implements PipeTransform {

  transform(value: string): string {
    let shortDesc = '';
    if (value.length <= 30) {
      return value;
    }
    const salto = value.indexOf('\n');
    if (salto > 0 && salto <= 50){
      shortDesc = value.substr(0, salto);
      return shortDesc;
    }

    if ( value.length >= 50 || salto > 50) {
      shortDesc = value.substr(0, 50) + '...';
    }

    return shortDesc;
  }

}
