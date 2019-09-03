import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articlesJson: any = JSON.parse(localStorage.getItem('articles')) || {};
  articlesNumber: number = +localStorage.getItem('articlesNumber') || 0;

  constructor(private router: Router) { }

  addArticle(article: any) {
    article.id = this.articlesNumber;
    this.articlesJson[this.articlesNumber] = article;
    this.articlesNumber += 1;
    this.resetDatabase();
  }

  delete(id) {
    delete this.articlesJson[id];
    this.resetDatabase();
    location.reload();
  }

  edit(id, article) {
    this.articlesJson[id] = article;
    this.resetDatabase();
  }

  resetDatabase()
  {
    localStorage.removeItem('articles');
    localStorage.setItem('articles', JSON.stringify(this.articlesJson));
    localStorage.removeItem('articlesNumber');
    localStorage.setItem('articlesNumber', String(this.articlesNumber));
    this.router.navigate(['/articles']);
  }

  getAll() {
    return this.articlesJson;
  }

  getById(id) {
    return this.articlesJson[id];
  }


}
