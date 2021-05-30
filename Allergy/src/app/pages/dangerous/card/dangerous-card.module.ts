import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DangerousCardComponent } from './dangerous-card.component';
import { AllergyCardModule } from '../../allergy/card/allergy-card.module';



@NgModule({
  declarations: [DangerousCardComponent],
  imports: [
    CommonModule, AllergyCardModule
  ],
  exports: [DangerousCardComponent]
})
export class DangerousCardModule { }
