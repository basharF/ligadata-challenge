import { ArticleService } from './../services/article.service';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {
  ArticleId: number;
  article: any = {}
  quillStyle ={
    border: 0
  };
  config = {
      toolbar: false
  };

  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ArticleId = +params['id'];
      this.article = this.articleService.getById(this.ArticleId);
    })
  }

}
