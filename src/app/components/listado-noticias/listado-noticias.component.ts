import { Component, Input, OnInit } from '@angular/core';
import { provideRoutes, Router } from '@angular/router';



@Component({
  selector: 'app-listado-noticias',
  templateUrl: './listado-noticias.component.html',
  styleUrls: ['./listado-noticias.component.css']
})
export class ListadoNoticiasComponent implements OnInit {
  @Input() listNoticias: any;

  constructor( private  router: Router) { }

  ngOnInit(): void {
  }
 
  getNoticia( idx:string ){
    return this.listNoticias[idx];
  }

  verNoticia(idx:number){
    this.router.navigate(['/noticia', idx]);
  }


}
