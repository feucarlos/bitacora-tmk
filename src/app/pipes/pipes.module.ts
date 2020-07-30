import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoradeldiaPipe } from './horadeldia.pipe';
import { DuarcionPipe } from './duracion.pipe';
import { ShortDescPipe } from './short-desc.pipe';
import { PeriodoPipe } from './periodo.pipe';



@NgModule({
  declarations: [HoradeldiaPipe, DuarcionPipe, ShortDescPipe, PeriodoPipe],
  imports: [
    CommonModule
  ],
  exports: [HoradeldiaPipe, DuarcionPipe, ShortDescPipe, PeriodoPipe]
})
export class PipesModule { }
