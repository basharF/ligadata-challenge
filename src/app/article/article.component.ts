import { ActivatedRoute } from '@angular/router';
import { ArticleService } from './../services/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: any = {
    id: '',
    title: '',
    content: '',
    date: '',
    image: ''
  };
  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let article = this.articleService.getById(+params.get('id'));
      if(article)
        this.article = article;
    });
  }

  submit() {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      if (id)
        this.articleService.edit(id, this.article);
      else
        this.articleService.addArticle(this.article);
    });

  }

  onImageChange($event): void {
    try{
    return this.readThis($event.target);
    }
    catch(e){
    }
  }

  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.article.image = myReader.result;
    }
    myReader.readAsDataURL(file);
  }
}
