import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent{
  @Input() surname:string;

  // sayHello : functionName
  // EventEmmiter: clase de Angular que permite emitir eventos
  // Hay que especificar el tipo de evento que va a emitir y se hace de la siguiente manera: <type>
  // Hay que instanciarlo
  @Output() sayHello: EventEmitter<string> = new EventEmitter<string>();

  public namesList: Array<string> = [];
  public inputName: string = 'John';
  constructor(){}

  //creamos el método:::
  onNameClick(){
    this.sayHello.emit('Hello!');
  }

  addName(){
    this.namesList.push(this.inputName);
    this.inputName = '';
    console.log(this.namesList);
  }

  updateInputName(event:any){
    this.inputName = event.target.value;
    console.log(this.inputName);
  }
}
