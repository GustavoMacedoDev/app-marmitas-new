import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumoFaturamentoComponent } from './components/resumo-faturamento/resumo-faturamento.component';


export const ResumoRoutes: Routes = [
	{
    path: 'resumo-faturamento', component: ResumoFaturamentoComponent
  }
];

@NgModule({
  imports: [
  	RouterModule.forChild(ResumoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ResumoRoutingModule {
}