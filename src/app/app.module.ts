import { AuthGuard } from './services/auth-guard.service';
import { ArticleService } from './services/article.service';
import { UserService } from './services/user.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleComponent } from './article/article.component';
import { ArticlePageComponent } from './article-page/article-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    ArticlesListComponent,
    ArticleComponent,
    ArticlePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'articles', component: ArticlesListComponent, canActivate: [AuthGuard]},
      {path: 'articles/edit/:id', component: ArticleComponent, canActivate: [AuthGuard]},
      {path: 'articles/add', component: ArticleComponent, canActivate: [AuthGuard]},
      {path: 'articles/:id', component: ArticlePageComponent, canActivate: [AuthGuard]},
      {path: '', component: HomeComponent},
    ])
  ],
  providers: [
    UserService,
    ArticleService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
