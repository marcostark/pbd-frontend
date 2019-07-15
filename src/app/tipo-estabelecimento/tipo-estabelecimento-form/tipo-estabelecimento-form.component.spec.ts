import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEstabelecimentoFormComponent } from './tipo-estabelecimento-form.component';

describe('TipoEstabelecimentoFormComponent', () => {
  let component: TipoEstabelecimentoFormComponent;
  let fixture: ComponentFixture<TipoEstabelecimentoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoEstabelecimentoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoEstabelecimentoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
