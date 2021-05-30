import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllergyAddComponent } from './allergy-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [AllergyAddComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, 
    MatInputModule, MatButtonModule, MatDialogModule,
    MatFormFieldModule
  ],
  exports: [AllergyAddComponent],
})
export class AllergyAddModule { }
