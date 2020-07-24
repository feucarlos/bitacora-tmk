import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoradeldiaPipe } from './horadeldia.pipe';
import { DuarcionPipe } from './duracion.pipe';
import { ShortDescPipe } from './short-desc.pipe';



@NgModule({
  declarations: [HoradeldiaPipe, DuarcionPipe, ShortDescPipe],
  imports: [
    CommonModule
  ],
  exports: [HoradeldiaPipe, DuarcionPipe, ShortDescPipe]
})
export class PipesModule { }
