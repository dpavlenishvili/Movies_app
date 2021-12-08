import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinutesToHoursPipe } from './pipes/length-calculator.pipe';

@NgModule({
    declarations: [
        MinutesToHoursPipe,
    ],
  exports: [
    MinutesToHoursPipe,
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
