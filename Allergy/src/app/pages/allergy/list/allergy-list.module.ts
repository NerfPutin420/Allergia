import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllergyListRoutingModule } from './allergy-list-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AllergyCardModule } from '../card/allergy-card.module';
import { ContainerModule } from 'src/app/shared/component/container/container.module';
import { AllergyListComponent } from './allergy-list.component';
import { AllergyAddModule } from '../add/allergy-add.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [AllergyListComponent],
  imports: [
    CommonModule, AllergyListRoutingModule, MatToolbarModule,
    AllergyCardModule, ContainerModule, AllergyAddModule, MatIconModule
  ]
})
export class AllergyListModule { }
