import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TituloComponent } from './components/titulo/titulo.component';
import {BrowserModule} from "@angular/platform-browser";
import { OpcaoJogoComponent } from './components/opcao-jogo/opcao-jogo.component';
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    OpcaoJogoComponent,

  ],
  imports: [BrowserModule, MatRadioModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
