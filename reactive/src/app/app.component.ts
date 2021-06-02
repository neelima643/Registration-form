import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegComponent } from './reg/reg.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  register = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(7)]),
    age: new FormControl('', [Validators.required]),
    adm: new FormControl('', [Validators.required])
  })

  
  get e() {
    return this.register.controls;
  }

  submit(register: any) {
    alert("Successfully registerd!");
  }

}
