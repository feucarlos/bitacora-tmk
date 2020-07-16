import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoradeldiaPipe } from './horadeldia.pipe';
import { DuarcionPipe } from './duarcion.pipe';



@NgModule({
  declarations: [HoradeldiaPipe, DuarcionPipe],
  imports: [
    CommonModule
  ],
  exports: [HoradeldiaPipe, DuarcionPipe]
})
export class PipesModule { }
