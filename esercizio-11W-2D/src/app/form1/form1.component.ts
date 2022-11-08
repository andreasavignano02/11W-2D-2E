import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from '../classes/hero';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  myhero:Hero = new Hero();
  @ViewChild('super') miosuper!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  addHero(){
    console.log(this.myhero)
  }
}
