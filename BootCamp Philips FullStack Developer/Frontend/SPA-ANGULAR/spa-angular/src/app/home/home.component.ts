import { Component, OnInit } from '@angular/core';
import { alunos } from '../model/alunos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  valor: number = 0;
  exibeTabela: boolean = false;

  listaAlunos: alunos[] = [
    {
      nome: 'Camila',
      idade: 24,
      email: 'camila@gmail',
      curso: 'Ciencia de dados',
    },
    {
      nome: 'Anderson',
      idade: 23,
      email: 'anderson@gmail',
      curso: 'Engenharia de Software',
    },
    {
      nome: 'Cleberson',
      idade: 34,
      email: 'cleberson@gmail.com',
      curso: 'Gestao de ti',
    },
    { nome: 'Davi', idade: 54, email: 'davi@gmail', curso: 'Eletronica' },
  ];

  displayedColumns: string[] = ['Nome', 'Idade', 'E-mail', 'Curso'];

  ngOnInit(): void {
    this.valor = 5;
  }

  mudarValor() {
    this.valor++;
  }

  reiniciarValor() {
    this.valor = 0;
  }

  exibirTabela() {
    this.exibeTabela = true;
  }
}
