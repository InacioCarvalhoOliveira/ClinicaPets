import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookFormPage } from './book-form.page';

describe('BookFormPage', () => {
  let component: BookFormPage;
  let fixture: ComponentFixture<BookFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BookFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
