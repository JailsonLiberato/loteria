import { Component } from '@angular/core';
import {Jogo} from "../../model/jogo.model";

@Component({
  selector: 'app-opcao-jogo',
  templateUrl: './opcao-jogo.component.html',
  styleUrls: ['./opcao-jogo.component.sass']
})
export class OpcaoJogoComponent {

  jogos: Array<Jogo>;
  jogoSelecionado: Jogo

  constructor() {
    this.jogos = this.getJogos();
    this.jogoSelecionado = this.jogos[0];
  }

  getJogos(): Array<Jogo>{
    return [{nome: "Mega Sena", quantidade: 6, valorMaximo: 60}, {nome: "Lotomania", quantidade: 50, valorMaximo: 100}, {nome: "Lotofácil", quantidade: 15, valorMaximo: 25}, {nome: "Quina", quantidade: 5, valorMaximo: 50}];
  }
}
