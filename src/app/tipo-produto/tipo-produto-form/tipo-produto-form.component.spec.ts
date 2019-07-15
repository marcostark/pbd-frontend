import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoProdutoFormComponent } from './tipo-produto-form.component';

describe('TipoProdutoFormComponent', () => {
  let component: TipoProdutoFormComponent;
  let fixture: ComponentFixture<TipoProdutoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoProdutoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoProdutoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
