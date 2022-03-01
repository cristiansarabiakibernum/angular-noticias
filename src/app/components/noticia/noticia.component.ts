import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styles: [
  ]
})
export class NoticiaComponent  {

  noticia: any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private _noticiaService: NoticiaService  
    
    ) {

    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);

     //  console.log( params['id'] );
     this.noticia = this._noticiaService.getNoticia( params['id'] );

     console.log(this.noticia);

    })
  }
 
}
