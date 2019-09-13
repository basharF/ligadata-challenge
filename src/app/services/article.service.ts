import { Subject, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articlesJson: any;
  $articlesJson: Subject<any>;
  articlesNumber: number;

  constructor(private router: Router) {
    this.articlesJson = JSON.parse(localStorage.getItem('articles')) || {};
    this.articlesNumber = +localStorage.getItem('articlesNumber') || 1;
    this.$articlesJson = new BehaviorSubject<any>(this.articlesJson);
   }

  addArticle(article: any) {
    article.id = this.articlesNumber;
    let index ='article'+this.articlesNumber
    this.articlesJson[index] = article;
    this.articlesNumber += 1;
    this.resetDatabase();
  }

  delete(id) {
    let index = 'article'+id
    delete this.articlesJson[index];
    this.resetDatabase();
  }

  edit(id, article) {
    let index = 'article'+id;
    article.id = +id;
    this.articlesJson[index] = article;
    this.resetDatabase();
  }

  resetDatabase() {
    localStorage.removeItem('articles');
    localStorage.setItem('articles', JSON.stringify(this.articlesJson));
    localStorage.removeItem('articlesNumber');
    localStorage.setItem('articlesNumber', String(this.articlesNumber));
    this.articlesJson = JSON.parse(localStorage.getItem('articles'));
    this.articlesNumber = +localStorage.getItem('articlesNumber');
    this.$articlesJson.next(this.articlesJson);
    this.router.navigate(['/articles']);
  }

  getAll() {
    return this.articlesJson;
  }

  getById(id) {
    let index = 'article'+id;
    return this.articlesJson[index];
  }
}
