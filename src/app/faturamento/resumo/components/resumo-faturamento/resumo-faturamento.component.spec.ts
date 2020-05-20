import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoFaturamentoComponent } from './resumo-faturamento.component';

describe('ResumoFaturamentoComponent', () => {
  let component: ResumoFaturamentoComponent;
  let fixture: ComponentFixture<ResumoFaturamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumoFaturamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumoFaturamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
