import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../Cadastro';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
    // tslint:disable-next-line:member-ordering
    posts: any = [] ;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.query()
    .subscribe(data => this.posts = data)
  }

}
