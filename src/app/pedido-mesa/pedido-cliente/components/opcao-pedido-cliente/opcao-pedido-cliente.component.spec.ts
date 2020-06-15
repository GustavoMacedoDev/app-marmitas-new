import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcaoPedidoClienteComponent } from './opcao-pedido-cliente.component';

describe('OpcaoPedidoClienteComponent', () => {
  let component: OpcaoPedidoClienteComponent;
  let fixture: ComponentFixture<OpcaoPedidoClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcaoPedidoClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcaoPedidoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
