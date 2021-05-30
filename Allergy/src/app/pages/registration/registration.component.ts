import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    email : new FormControl('', Validators.email),
    password : new FormControl('', Validators.required),
    repassword: new FormControl('', Validators.required)
  });
  error=false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  registration(): void{
    this.error=false;
    if(this.form.valid){
      if(this.form.value.password === this.form.value.repassword){
        this.router.navigateByUrl('/login');
        return;
      }else{
        console.log("Hiba történt: nem egyezik a két jelszó");
      }

    }
    this.error=true;
  }

}
