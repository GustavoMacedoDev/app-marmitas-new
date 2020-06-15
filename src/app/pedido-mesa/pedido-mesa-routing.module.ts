import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoClienteComponent } from './pedido-cliente/components/pedido-cliente/pedido-cliente.component';
import { ListaOpcoesPedidoComponent } from './pedido-cliente/components/lista-opcoes-pedido/lista-opcoes-pedido.component';


export const PedidoMesaRoutes: Routes = [
  {
    path: 'pedido-mesa-cliente', component: PedidoClienteComponent
  },
  {
    path: 'opcoes', component: ListaOpcoesPedidoComponent
  }
	
];

@NgModule({
  imports: [
  	RouterModule.forChild(PedidoMesaRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PedidoMesaRoutingModule {
}