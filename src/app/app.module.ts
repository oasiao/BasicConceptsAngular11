import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';

import { UpperCapitalPipe } from './home-component/upper-capital.pipe';
import { LoggerService } from './logger.service';
@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    HomeComponentComponent,
    UpperCapitalPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
