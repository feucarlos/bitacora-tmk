import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duarcion'
})
export class DuarcionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
