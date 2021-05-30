import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FbBaseService } from 'src/app/service/fb-base.service';
import { Allergy } from 'src/app/shared/models/allergy.model';
import { AllergyAddComponent } from '../add/allergy-add.component';

@Component({
  selector: 'app-allergy-list',
  templateUrl: './allergy-list.component.html',
  styleUrls: ['./allergy-list.component.scss']
})
export class AllergyListComponent implements OnInit {
  title = 'Allergiák';
  list: Observable<Allergy[]> | null = null;

  constructor(private service: FbBaseService<Allergy>, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.get();
  }

  get(): void{
    this.list = this.service.get('allergies');
  }

  onGetAllergy(event: Allergy): void{
    this.router.navigateByUrl('/details/allergy/' + event.id);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AllergyAddComponent, {});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((allergy: Allergy) => {
      console.log(allergy);
      if (allergy?.patient) {
        this.service.add('allergies', allergy);
      }
    }, (err: any) => {
      console.warn(err);
    });
  }

}
