import { Component, Input, OnInit } from '@angular/core';
import {count} from 'rxjs/operators';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  // @Input() titleArticle: string;
  // @Input() contentArticle: string;

  public counter : number = 0;

  /*post:{
    title: string,
    content: string,
    loveIts: number,
    created_at: Date
  };*/

  post = [
    {
      title: 'Mon Premier Article',
      content: 'Lorem ipsum 1',
      like: 0,
      dislike: 0
    },
    {
      title: 'Mon Deuxieme Article',
      content: 'Lorem ipsum 2',
      like: 0,
      dislike: 0
    },
    {
      title: 'Mon Troisième Article',
      content: 'Lorem ipsum 3',
      like: 0,
      dislike: 0
    }
  ];

  constructor() { }

  getColor(){
    return 'white';
  }

  // affichage de l'heure
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  ngOnInit() {
  }

}
