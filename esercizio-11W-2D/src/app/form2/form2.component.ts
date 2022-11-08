import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  form!: FormGroup;
  heroproibiti!: ['SuperMan', 'Lanterna Verde']
  
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, this.heroProibitiValidator]),
      lastname: new FormControl(null),
      email: new FormControl(null),
  })}
  addHero(){
    console.log(this.form)
  }
  heroProibitiValidator = (campo: FormControl)=> {
    console.log('Validator: ' + this.heroproibiti.includes(campo.value))
    return null;
  }
}