import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancaPedidoBalcaoComponent } from './components/lanca-pedido-balcao/lanca-pedido-balcao.component';


export const BalcaoRoutes: Routes = [
	{
		path: 'lanca-pedido-balcao',
		component: LancaPedidoBalcaoComponent
	}
];

@NgModule({
  imports: [
  	RouterModule.forChild(BalcaoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BalcaoRoutingModule {
}