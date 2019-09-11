import { ArticleService } from './../services/article.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  allArticlesArray: any[] = [];
  subscription: Subscription;
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.subscription = this.articleService.$articlesJson.subscribe(allArticles => {
      this.allArticlesArray  = Object.keys(allArticles).map(e=>allArticles[e]);
    });
  }

  deleteArticle(id) {
    this.articleService.delete(id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
