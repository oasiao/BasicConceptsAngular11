import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-component',
  //template: `<p>Hello world!</p>`
  templateUrl: './my-new-component.component.html', //o template o templateURL
  //styles: [`h3{ font-size: 1.6em;}`]
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent implements OnInit {

  //variables
  age: number; //or we can do it like this: age: number = 18;
  names: Array<string>;


  constructor() {
    this.age = 18;
    this.names = ['Kim','Santiago','Sandra','Ignacio'];
  }

  ngOnInit(): void {
    console.log('My new component loaded successfully.');
  }

  addAge(){
    this.age++;
  }

  removeAge(){
    this.age--;
  }

}
