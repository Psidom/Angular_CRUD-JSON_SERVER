import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Cadastro } from '../Cadastro';
import { PostService } from '../services/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from '../services/message.service';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-post-save',
  templateUrl: './post-save.component.html',
  styleUrls: ['./post-save.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostSaveComponent implements OnInit {
  [x: string]: any;
  cadastros = [];

  valForm;

  datadia = new Date().toLocaleDateString('pt-BR');

 /* cadastro: Cadastro = {
    nome: '',
    idade: 10,
    data: this.datadia,
    atributo1: null,
    atributo2: null,
    atributo3: null,
    atributo4: null,
    atributo5: null
  };*/

   /*nome: '';
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
  }*/
  /*add() {
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
  }*/
 // tslint:disable-next-line:member-ordering
 post = {
    nome: '',
    idade: null,
    data: this.datadia,
    atributo1: '',
    atributo2: '',
    atributo3: '',
    atributo4: '',
    atributo5: ''
 };
 cloneForm: FormGroup;

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private valida: FormBuilder
  ) {
    this.validar();
   }

validar(){
this.cloneForm = this.valida.group({
nomev: [Validators.required, Validators.pattern('[A-Z]{3}[0-9]{4}')],
});
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.postService.find(+params['id'])
        .subscribe(data => this.post = data, );
      }
    });
  }

  get nome ( ) { return this.myForm.get('nomef'); }

  save() {
    if ( !this.post.atributo1 || this.post.atributo1 == null ) {
      this.post.atributo1 = '';
    } else { this.post.atributo1 = ' Raio Laser '; }
    if (!this.post.atributo2 || this.post.atributo2 == null) {
      this.post.atributo2 = '';
    } else { this.post.atributo2 = ' Braço Mecânico '; }
    if (!this.post.atributo3 || this.post.atributo3 == null) {
      this.post.atributo3 = '';
    } else { this.post.atributo3 = ' Esqueleto Reforçado '; }
    if (!this.post.atributo4 || this.post.atributo4 == null) {
      this.post.atributo4 = '';
    } else { this.post.atributo4 = ' Sentidos Aguçados '; }
    if (!this.post.atributo5 || this.post.atributo5 == null) {
      this.post.atributo5 = '';
    } else {this.post.atributo5 = ' Pele Adaptativa '; }
    if (this.post.idade < 10 || this.post.idade > 20 ) {
      return null;
    }if (this.cloneForm.status === 'INVALID') {
      return null;
        }

    this.postService.save(this.post)
    .subscribe(() => {
      this.messageService.message = 'Enviado Com Sucesso';
      alert(JSON.stringify(this.post)),
      this.router.navigate(['/clone']);
    });
  }
}
