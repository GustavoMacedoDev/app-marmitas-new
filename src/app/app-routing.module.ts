import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidoComponent } from './relatorios/pedido/pedido.component';


const routes: Routes = [
  { path : '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'pedido', component: PedidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
