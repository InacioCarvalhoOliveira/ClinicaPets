import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }
  /**
   * registra um objeto no banco de dados 
   * @param tabela : o nome da tabela recebe o objeto
   * @param objeto : o conteúdo a ser gravado no banco
   * @param status : integer
  */

  save(tabela: string, objeto: any) {
    return 0;

  }
}
