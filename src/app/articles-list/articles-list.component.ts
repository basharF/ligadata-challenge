import { UserService } from './../services/user.service';
import { ArticleService } from './../services/article.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  allArticles: any = {};
  allArticlesArray: any[] = [];
  constructor(private articleService: ArticleService, private userService: UserService) { }

  ngOnInit() {
    this.allArticles = this.articleService.getAll();
    this.allArticlesArray  = Object.keys(this.allArticles).map(e=>this.allArticles[e]);
  }

  deleteArticle(id) {
    this.articleService.delete(id);
  }

}
