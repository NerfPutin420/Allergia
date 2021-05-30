import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-allergy-add',
  templateUrl: './allergy-add.component.html',
  styleUrls: ['./allergy-add.component.scss']
})
export class AllergyAddComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    patient: new FormControl(''),
    type: new FormControl(''),
    category: new FormControl(''),
    criticality: new FormControl('', Validators.maxLength(2)),
    img: new FormControl(''),
    warning: new FormControl(false)
  });


  constructor(public dialogRef: MatDialogRef<AllergyAddComponent>) { }

  ngOnInit(): void {
  }


}
