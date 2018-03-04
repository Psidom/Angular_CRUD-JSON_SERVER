import { Component, OnInit, ViewChild } from '@angular/core';
import { Cadastro } from '../Cadastro';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from '../services/post.service';
import { ModalComponent } from '../bootstrap/modal/modal.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

    posts: Array<any> = [] ;
    postToDelete = null;

    @ViewChild(ModalComponent)
    modal: ModalComponent;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.query()
    .subscribe(data => this.posts = data);
  }

  /*destroy(id, index){
    if (confirm('Deseja Realmente Apagar esse Clone?')){
      this.postService.destroy(+id).subscribe(() => {
        alert('Clone Excluido');
        this.posts.splice(index, 1);
      });
    }
  }*/
  destroy() {
    this.postService.destroy(+this.postToDelete.id).subscribe(() => {
      alert('Clone Excluido Com Sucesso');
      const index = this.posts.indexOf(this.postToDelete);
      this.posts.splice(index, 1);
      this.modal.close();
      });

  }

  openModal(post) {
  this.postToDelete = post;
  this.modal.open();
  }
}
