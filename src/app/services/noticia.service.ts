import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  noticia: any = {};

  constructor(private http: HttpClient) { }

  
  getNoticias(parametros: any): Observable<any> {
    
      const URL = 'https://newsdata.io/api/1/news?apikey=pub_48711d29e6968c9493a901faefb61fe3f7df'
      + '&country=' + parametros.pais 
      + '&language=' + parametros.idioma 
      + '&category=' + parametros.categoria

    console.log(URL);

    return this.http.get(URL);
  }


  getNoticia( idx:number ){
    //return this.listNoticias[idx];
    
    //this.noticia=this.http.get(URL);
    console.log('putp');
  }



}