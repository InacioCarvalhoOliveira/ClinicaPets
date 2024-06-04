import { ThisReceiver } from '@angular/compiler';
import { Component} from '@angular/core';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.page.html',
  styleUrls: ['./book-form.page.scss'],
})
export class BookFormPage {
  livro = {
    'id':'',
    'titulo': '',
    'autor': '',
    'categoria': '',
    'ano': 0,
    'editora': ''

  }
  biblioteca: any=[];

  constructor() { 
    let aux = localStorage.getItem('biblioteca');
    this.biblioteca = JSON.parse(aux !== null && aux !== void 0 ? aux : "");
    console.log(this.biblioteca);
    
  }
  save(){
    console.log('Livro cadastrado com sucesso');
    this.livro.id = Date.now().toString(16);
    this.biblioteca.push(this.livro);    
    let library = JSON.stringify(this.biblioteca)
    localStorage.setItem('biblioteca',library);
    //this.livro = isEmpty;
  //  console.log(this.livro.titulo,' ',this.livro.autor,' ',this.livro.categoria,' ',this.livro.ano,' ',this.livro.editora,' ');
    
  }



}
