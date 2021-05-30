import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Allergy } from 'src/app/shared/models/allergy.model';

@Component({
  selector: 'app-allergy-card',
  templateUrl: './allergy-card.component.html',
  styleUrls: ['./allergy-card.component.scss']
})
export class AllergyCardComponent implements OnInit {
  @Input() allergy: Allergy = {} as any;
  @Input() hasAction = true;
  @Output() callDang = new EventEmitter<Allergy>();
  @Output() getAllergy = new EventEmitter<Allergy>();

  constructor() { }

  ngOnInit(): void {
  }


  toggleStar(event: any): void{
    event.stopPropagation();
    this.allergy.warning= !this.allergy.warning;
    this.callDang.emit(this.allergy); 
  }

}
