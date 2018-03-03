import { Component } from '@angular/core';
import { isDate } from 'util';
import { getLocaleDateFormat, getLocaleDateTimeFormat, DatePipe } from '@angular/common';
import { Cadastro } from './Cadastro';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tasks = [];

  nome: '';
    idade: '';
    atributo1 = null;
    atributo2 = null;
    atributo3 = null;
    atributo4 = null;
    atributo5 = null;
  datadia = new Date().toLocaleDateString('pt-BR');

  add() {

    this.tasks.push(this.nome);
    this.tasks.push(this.idade);
    this.tasks.push(this.datadia);
    if (this.atributo1 != null || this.atributo1 === 'true') {
      this.atributo1 = 'Raio Laser';
    }if (this.atributo2 != null || this.atributo2 === 'true') {
      this.atributo2 = 'Braço Mecânico';
    }if (this.atributo3 != null || this.atributo3 === 'true') {
      this.atributo3 = 'Esqueleto Reforçado';
    }if (this.atributo4 != null || this.atributo4 === 'true') {
      this.atributo4 = 'Sentidos Aguçados';
    }if (this.atributo5 != null || this.atributo5 === 'true') {
      this.atributo5 = 'Pele Adaptativa';
    }
    this.tasks.push(this.atributo1);
    this.tasks.push(this.atributo2);
    this.tasks.push(this.atributo3);
    this.tasks.push(this.atributo4);
    this.tasks.push(this.atributo5);
  }
}
