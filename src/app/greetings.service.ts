import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

//escribir Injectable en todos los servicios que se creen
@Injectable()
export class GreetingsService {
  public counter = 0;
  constructor(private logger: LoggerService){

  }

  handleGreeting(message:string){
    this.counter++;
    this.logger.log(message);
  }
}
