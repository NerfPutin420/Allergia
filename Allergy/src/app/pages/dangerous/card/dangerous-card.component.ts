import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Allergy } from 'src/app/shared/models/allergy.model';

@Component({
  selector: 'app-dangerous-card',
  templateUrl: './dangerous-card.component.html',
  styleUrls: ['./dangerous-card.component.scss']
})
export class DangerousCardComponent implements OnInit {
  @Input() dangerous: Allergy = {} as any;

  constructor() { }

  ngOnInit(): void {
  }

}
