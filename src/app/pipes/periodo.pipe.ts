import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'periodo'
})
export class PeriodoPipe implements PipeTransform {

  transform(value: string): string {
    value = value.substr(0, 4);
    return (Number(value) - 1) + '-' + value;
  }

}
