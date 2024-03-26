import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  // Basic Testing
  getTodos(): any[''] {
    const lista = localStorage.getItem('todos') ?? '[]';
    const result = JSON.parse(lista);//localStorage.getItem('todos'));
    return result || [];
  }
}