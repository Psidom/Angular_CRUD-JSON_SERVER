import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../Cadastro';

@Component({
  selector: 'app-post-save',
  templateUrl: './post-save.component.html',
  styleUrls: ['./post-save.component.css']
})
export class PostSaveComponent implements OnInit {
  cadastros = [];

  datadia = new Date().toLocaleDateString('pt-BR');

  cadastro: Cadastro = {
    nome: '',
    idade: 10,
    data: this.datadia,
    atributo1: null,
    atributo2: null,
    atributo3: null,
    atributo4: null,
    atributo5: null
  };

  nome: '';
    idade: '';
    atributo1 = null;
    atributo2 = null;
    atributo3 = null;
    atributo4 = null;
    atributo5 = null;
  addobj() {
    const cadastro = Object.assign({}, this.cadastro);
    if ( cadastro.atributo1 != null || cadastro.atributo1 === 'true') {
      cadastro.atributo1 = 'Raio Laser';
    }if (cadastro.atributo2 != null || cadastro.atributo2 === 'true') {
      cadastro.atributo2 = 'Braço Mecânico';
    }if (cadastro.atributo3 != null || cadastro.atributo3 === 'true') {
      cadastro.atributo3 = 'Esqueleto Reforçado';
    }if (cadastro.atributo4 != null || cadastro.atributo4 === 'true') {
      cadastro.atributo4 = 'Sentidos Aguçados';
    }if (cadastro.atributo5 != null || cadastro.atributo5 === 'true') {
      cadastro.atributo5 = 'Pele Adaptativa';
    }if (cadastro.idade < 10 || cadastro.idade > 20 ) {
      return null;
    }
    this.cadastros.push(cadastro);
    cadastro.atributo1 = '';
    cadastro.atributo2 = '';
    cadastro.atributo3 = '';
    cadastro.atributo4 = '';
    cadastro.atributo5 = '';

  }
  add() {
    this.cadastros.push(this.nome);
    this.cadastros.push(this.idade);
    this.cadastros.push(this.datadia);
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
    this.cadastros.push(this.atributo1);
    this.cadastros.push(this.atributo2);
    this.cadastros.push(this.atributo3);
    this.cadastros.push(this.atributo4);
    this.cadastros.push(this.atributo5);
  }

  constructor() { }

  ngOnInit() {
  }

}
