import {Routes, RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { getLocaleDateTimeFormat } from '@angular/common';
import { AppComponent } from './app.component';
import { MyRulesDirective } from './my-rules.directive';
import { PostListComponent } from './post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [

  {path: 'posts', component: PostListComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    MyRulesDirective,
    PostListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
