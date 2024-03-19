import { TestBed } from '@angular/core/testing';

import { DatabaseService } from './database.service';

describe('DatabaseService', () => {
  let service: DatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseService);
  });
  beforeEach(() => {

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve gravar informações no banco de dados', ()=>{
    // arrange {preparação do ambiente}
    let tabela = 'vendas';
    let venda = {
      'vendas': 'Notebook',
      'marca': 'Samsung',
      'preço': 4500,
      'id_vendedoe': 12345,
      'data': '2024-03-17'
    };
    // act
    let status = service.save(tabela,venda);
    // assert
    expect(status).toBe(1);
  })
  it('deve ler informações no banco de dados', ()=>{

  })
  it('deve atualizar informações no banco de dados', ()=>{

  })
  it('deve deletar informações no banco de dados', ()=>{

  })
});
function id(id: any) {
  throw new Error('Function not implemented.');
}

