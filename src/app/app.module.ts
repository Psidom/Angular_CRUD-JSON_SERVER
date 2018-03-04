import {Routes, RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { getLocaleDateTimeFormat } from '@angular/common';
import { AppComponent } from './app.component';
import { MyRulesDirective } from './my-rules.directive';
import { PostListComponent } from './post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { PostSaveComponent } from './post-save/post-save.component';
import { ButtonComponent } from './bootstrap/button/button.component';
import { GlyphComponent } from './bootstrap/glyph/glyph.component';
import { ModalComponent } from './bootstrap/modal/modal.component';


const appRoutes: Routes = [
  {path: '', component: PostListComponent},
  {path: 'posts/:id/edit', component: PostSaveComponent},
  {path: 'posts/create', component: PostSaveComponent},
  {path: 'posts', component: PostListComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    MyRulesDirective,
    PostListComponent,
    PostSaveComponent,
    ButtonComponent,
    GlyphComponent,
    ModalComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
